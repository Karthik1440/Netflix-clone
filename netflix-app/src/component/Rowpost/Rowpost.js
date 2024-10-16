import React, { useEffect,useState } from 'react'
import "./Rowpost.css"
import axios from '../axios'
import {  imageUrl } from '../../constant/Constant'

function Rowpost(props) {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    axios.get(props.Urls).then((res)=>{

      console.log(res.data.results)
      setPosts(res.data.results)

    }).catch((error)=>{
      console.log("network error")
    })
  },[])
  return (
    <div className='row'>
        <h1>{props.title}</h1>
      <div className='row-post'>
        {posts.map((data,index)=>{
          return(
            <img className={props.isSmall ? 'smallposter': 'poster'}   key={index} alt='rowpost' src={`${imageUrl+data.backdrop_path }`}/>
          )

        })}
 
      </div>

    </div>
  )
}

export default Rowpost
