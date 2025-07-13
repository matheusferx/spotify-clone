import axios from 'axios';

const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function artistArray() {
  const response = await axios.get(`${URL}/artists`);
  return response.data;
}

export async function songsArray() {
  const response = await axios.get(`${URL}/songs`);
  return response.data;
}
