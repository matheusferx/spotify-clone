import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.BACK_URL || "http://localhost:3000";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
