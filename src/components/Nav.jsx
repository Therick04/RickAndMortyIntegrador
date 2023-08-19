import SearchBar from './SearchBar'
import logoRM from '../assets/logo R&M.png'
import letras from '../assets/RaM letras.png'
import './Styles/Header.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    
    return (
        <header>
            <div className="imgs">
                <img className='img' src={logoRM} alt="" />
                <img className='letras' src={letras} alt="" />
            </div>

            <div className='search'>
                    <div className="search1">
                        <SearchBar className='searchBar1' onSearch={props.onSearch}/>
                    </div>
            </div>

            <div className="HomeAbout">
                <Link to={`/about`}>
                    <button className='ba1'>About</button>
                </Link>
                <Link to={`/home`}>
                    <button className='ba2'>Home</button>
                </Link>
                <Link to={'/favorites'}>
                    <button className='ba3'>Favorites</button>
                </Link>
            </div>
        </header>
    );
}