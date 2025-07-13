import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs.js'
import { artistArray } from '../assets/database/artists.js'

const Song = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([songsArray(), artistArray()]).then(([songsData, artistsData]) => {
      setSongs(songsData);
      setArtists(artistsData);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Carregando...</div>;

  const songObj = songs.find(
    (currentSongObj) => currentSongObj._id === id
  );

  if (!songObj) return <div>Música não encontrada</div>;

  const { image, name, duration, artist, audio, index } = songObj;

  const artistObj = artists.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  const songsArrayFromArtist = songs.filter(
      (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)); 
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id;

  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)); 
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]?._id;

  return (
    <div className='song'>
      <div className='offer__scroll-container offer__scroll-container-single-item'>
        <div className="song__container">
          <div className="song__image-container">
            <img src={image} alt={`Imagem da Música ${name}`} />
          </div>
        </div>

        <div className="song__bar">
          {artistObj && (
            <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
              <img width={60} height={60} src={artistObj.image} alt={`Imagem do Artista ${artist}`} />
            </Link>
          )}

          <Player duration={duration} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} audio={audio} />

          <div>
            <p className="song__name">{name}</p>
            <p>{artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;