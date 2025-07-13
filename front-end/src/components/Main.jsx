import React, { useEffect, useState } from 'react'
import ItemList from './IntemList';
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';

const Main = ({ type }) => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    artistArray().then(setArtists);
    songsArray().then(setSongs);
  }, []);

  return (
    <div className="main">
      <div className="offer__scroll-container">
        {(type === "artists" || type === undefined) && (
          <ItemList title="Artistas" items={4} itemsArray={artists} path="/artists" idPath="/artist" />
        )}
        {(type === "songs" || type === undefined) && (
          <ItemList title="Músicas" items={8} itemsArray={songs} path="/songs" idPath="/song" />
        )}
      </div>
    </div>
  )
}

export default Main