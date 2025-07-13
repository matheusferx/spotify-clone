import axios from "axios";

const URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getData() {
  const [responseArtist, responseSongs] = await Promise.all([
    axios.get(`${URL}/artists`),
    axios.get(`${URL}/songs`)
  ]);

  return {
    artistArray: responseArtist.data,
    songsArray: responseSongs.data
  };
}