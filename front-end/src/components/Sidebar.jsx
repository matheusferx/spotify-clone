import Logo from '../assets/icons/logo-spotify.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <span className="fa fa-home"></span>
                        <span>Início</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </Link>
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
            <p className='cookies__text'>Cookies</p>
            </div>

            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar