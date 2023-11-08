import React, { useEffect, useState } from 'react';
import "./styles/Home.scss"
import Row from './Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
const apiKey="504ea76f5712b8bdee491689685f9a19";
const url="https://api.themoviedb.org/3/";
const imgUrl="https://image.tmdb.org/t/p/original/";
const upcoming="upcoming";
const nowPlaying="now_playing";
const popular="popular";
const topRated="top_rated"
const Home = () => {
  const [upcomingMovies,setUpcomingMovies]=useState([])
  const [nowPlayingMovies,setNowPlayingMovies]=useState([])
  const [popularMovies,setPopularMovies]=useState([])
  const [topRatedMovies,setTopRatedMovies]=useState([])
  const [genre,setGenre]=useState([])
  useEffect(() =>{
    const fetchUpcoming = async() =>{
      const {data}=await axios.get(`${url}movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(data.results)
    }
    const fetchnowPlaying = async() =>{
      const {data}=await axios.get(`${url}movie/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(data.results)
    }
    const fetchPopular = async() =>{
      const {data}=await axios.get(`${url}movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(data.results)
    }
    const fetchtopRated = async() =>{
      const {data}=await axios.get(`${url}movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(data.results)
    }
    const getAllGenres = async() =>{
      const {data}=await axios.get(`${url}genre/movie/list?api_key=${apiKey}`)
      setGenre(data.genres)
    }
    fetchUpcoming()
    fetchnowPlaying()
    fetchPopular()
    fetchtopRated()
    getAllGenres()
  },[] )
  return (
    <section className='home'>
    <div className='banner' style={{
      backgroundImage: popularMovies[1]?`url(${`${imgUrl}${popularMovies[1].poster_path}`})`:"rgb(16,16,16)"
    }}>
    {popularMovies[1] && <h1>{popularMovies[1].original_title}</h1>}
    {popularMovies[1] && <p>{popularMovies[1].overview}</p>}
    <div>

    <button> <BiPlay /> PLAY</button>
    <button>ADD <BiPlus /></button>
    </div>
    </div>
      <Row title="Upcoming Movies" arr={upcomingMovies}/>
      <Row title="Now PLaying" arr={nowPlayingMovies}/>
      <Row title="Popular on netflix" arr={popularMovies} />
      <Row title="Top Rated" arr={topRatedMovies} />
      <div className='genreBox'>
      {genre.map((items) => (
        <Link key={items.id} to={`/genre/${items.id}`}>{items.name}</Link> 
      ))}
      </div>
    </section>
  )
}

export default Home;