import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendMessage } from '../actions/sendMessage';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const errName = useRef(null);
  const errEmail = useRef(null);
  const errMsg = useRef(null);
  const sentNotice = useRef(null);
  const initialRender = useRef({
    name: true,
    email: true,
    msg: true
  });
  
  const handleChange = e => {
    const value = e.target.value;

    switch(e.target.name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'msg':
        setMsg(value);
        break;
      default:
        break;
    }
  }

  const validate = useCallback( fieldName => {
    if (fieldName === 'email') {
      const emailReg = /\S+@\S+\.\S+/;
      const phoneReg = /1?[-\s(]*\d\d\d[-\s)]*\d\d\d[-\s]?-?\s?\d\d\d\d/;
      return email.trim().match(emailReg) || email.trim().match(phoneReg);
    } else if (fieldName === 'name') {
      return name.trim() !== ''; 
    } else if (fieldName === 'msg') {
      return msg.trim() !== '';
    }
  }, [name, email, msg]);

  useEffect(() => {
    if (initialRender.current.name) {
      initialRender.current.name = false;
      return;
    }

    errName.current.style.display = validate('name')? 'none': 'block';

  }, [name]);

  useEffect(() => {
    if (initialRender.current.email) {
      initialRender.current.email = false;
      return;
    }

    errEmail.current.style.display = validate('email')? 'none': 'block';

  }, [email]);

  useEffect(() => {
    if (initialRender.current.msg) {
      initialRender.current.msg = false;
      return;
    }

    errMsg.current.style.display = validate('msg')? 'none': 'block';

  }, [msg]);

  const submit = () => {
    errName.current.style.display = validate('name')? 'none': 'block';
    errEmail.current.style.display = validate('email')? 'none': 'block';
    errMsg.current.style.display = validate('msg')? 'none': 'block';

    if (
      errName.current.style.display === 'block' ||
      errEmail.current.style.display === 'block' ||
      errMsg.current.style.display === 'block'
    ) return;

    function notifyStatus(success) {
      sentNotice.current.style.color = success? 
        'rgb(30, 255, 60)': 'rgb(255, 20, 40)';
      sentNotice.current.innerHTML = success? 
        'Message Sent!': 'An error occured. Please try again later.';
    }
    
    sentNotice.current.innerHTML = 'Sending...';
    sentNotice.current.style = 'color:white;display:block';

    sendMessage({
      name: name.trim(),
      email: email.trim(),
      msg: msg.trim()
    }).then(res => {
      notifyStatus(res.status === 200);
    }).catch(_ => {
      notifyStatus(false);
    });
  }

  return (
    <div id='contact'>
      <h1>Contact</h1>
      <hr style={{width: '90px', fontWeight: 'bold'}}/>
      <form className='contact-form'>
        <input 
          type='text' 
          className='contact-form-name' 
          name='name'
          placeholder=' Name'
          value={name}
          onChange={handleChange}
        />
        <p className='contact-err' ref={errName}>
          Please enter a name.</p>
        <input 
          type='text' 
          className='contact-form-email' 
          name='email'
          placeholder=' Email or Phone'
          value={email}
          onChange={handleChange}
        />
        <p className='contact-err' ref={errEmail}>
          Please enter a valid email or phone number.</p>
        <textarea 
          type='text' 
          className='contact-form-message' 
          name='msg'
          placeholder=' Your Message'
          rows='7'
          value={msg}
          onChange={handleChange}
        />
        <p className='contact-err' ref={errMsg}>
          Message cannot be empty.</p>
        <input
          className='contact-form-btn'
          type='button'
          value='Send'
          onClick={submit}
        />
        <p className='contact-sent-notice' ref={sentNotice}/>
      </form>
    </div>
  );
}