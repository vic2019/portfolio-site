const aws = require("aws-sdk");
const ses = new aws.SES({ apiVersion: "2010-12-01" });
const sns = new aws.SNS({ apiVersion: "2010-03-31" });

exports.handler = async (e, context) => {
  const origin = e.headers.origin;
  if (
    origin !== "https://victorwang.info" &&
    origin !== "https://www.victorwang.info"
  ) {
    return {
      statusCode: 403
    };
  }

  const body = JSON.parse(e.body);

  if (!body.name || !body.email || !body.msg) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        msg: "Missing required field(s)"
      })
    };
  }

  const msgBody = `Name: ${body.name}\nContact: ${body.email}\nMessage:\n${body.msg}`;

  const paramsSES = {
    Destination: { ToAddresses: ["victor.wang2019@gmail.com"] },
    Message: {
      Body: {
        Text: {
          Data: msgBody,
          Charset: "utf-8"
        }
      },
      Subject: {
        Data: `Message from victorwang.info`,
        Charset: "utf-8"
      }
    },
    Source: "email@victorwang.info"
  };

  const paramsSNS = {
    Message: msgBody,
    Subject: "Message from victorwang.info",
    TopicArn: "arn:aws:sns:us-west-2:705822044788:PortfolioSiteMsg"
  };

  const sesPromise = new Promise((resolve, reject) => {
    ses.sendEmail(paramsSES, err => {
      if (err) return reject(err);

      return resolve();
    });
  });

  const snsPromise = new Promise((resolve, reject) => {
    sns.publish(paramsSNS, err => {
      if (err) return reject(err);

      return resolve();
    });
  });

  return Promise.all([sesPromise, snsPromise])
    .then(_ => {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": origin
        }
      };
    })
    .catch(err => err);
};
