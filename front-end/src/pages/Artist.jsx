import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';

const Artist = () => {
  const { id } = useParams();
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([artistArray(), songsArray()]).then(([artistsData, songsData]) => {
      setArtists(artistsData);
      setSongs(songsData);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Carregando...</div>;

  const artistObj = artists.find((currentArtistObj) => currentArtistObj._id === id);
  if (!artistObj) return <div>Artista não encontrado</div>;

  const { name, banner } = artistObj;

  const songsArrayFromArtist = songs.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id;

  return (
    <div className="artist">
      <div className='offer__scroll-container offer__scroll-container-single-item'>
        <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})` }}>
          <h2 className='artist__title'>{name}</h2>
        </div>
        <div className="artist__body">
          <h2>Populares</h2>
          <SongList songsArray={songsArrayFromArtist}/>
        </div>
        {randomIdFromArtist && (
          <Link to={`/song/${randomIdFromArtist}`} >
            <FontAwesomeIcon
              className="single-item__icon single-item__icon--artist"
              icon={faCirclePlay} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Artist