import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios'
import {API_KEY,imageUrl} from '../../constant/Constant'



function Banner() {
  const [movie,setMovie] = useState()


  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
    setMovie(res.data.results[2])
   })
  })
  return (
    <div> 
      <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path:""})`}}>
        <div className='title'>
            <h1>{movie ? movie.title:""}</h1>

            <div className='banner-button'>
            <button ><i className="fa-solid fa-play"></i> Play</button>
            <button ><i className="fa-solid fa-plus"></i> My List</button>
        </div>
        <div className='discription'>
            <p>{movie ? movie.overview:""}</p>
        </div>
        </div>
        
        <div className='fade_bottom'></div>
      </div>
      
    </div>
  )
}

export default Banner
