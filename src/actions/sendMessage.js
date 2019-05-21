import axios from 'axios';

const url = ''

export function sendMessage({ name, email, msg }) {
  return axios.post(url, {
    name,
    email,
    msg
  });
};