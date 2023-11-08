import React from 'react';
import Card from './Card';
import img1 from "../large_suzume-movie-poster-2023.webp"
import "./styles/Row.scss"
const imgUrl="https://image.tmdb.org/t/p/original/";
const Row = ({title,arr=
  [
    {
      img:{img1}
    },
  ]}) => {
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div>
         {arr.map((items,index) => (
          <Card key={index} img={`${imgUrl}/${items.poster_path}`} />
         ))}
        </div>
    </div>
  )
}

export default Row;