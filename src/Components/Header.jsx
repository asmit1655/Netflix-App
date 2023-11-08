import React from 'react';
import img from "../netflix_PNG31.webp";
import { Link } from 'react-router-dom';
import {BiSearchAlt2} from "react-icons/bi";
import "./styles/App.scss";
const Header = () => {
  return (
    <nav className='header'>
    <img src={img} alt='logo' />
    <div>
      <Link to="/tvShows">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/recentlyAdded">Recently Added</Link>
      <Link to="/myList">My List</Link>
    </div>
    <BiSearchAlt2 />
    </nav>
  )
}

export default Header;