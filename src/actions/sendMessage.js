import axios from 'axios';
import { MESSAGE_URI } from '../config/config';

export function sendMessage(body) {
  return axios.post(MESSAGE_URI, body);
};