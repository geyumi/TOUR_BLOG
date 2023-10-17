import React from 'react'
import Header from '../../components/header/Header'
import "./home.css"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Home() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res=await axios.get("/posts" );
      setPosts(res.data)
    };
    fetchPosts();
  }, []);
  

  return (
    <div>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
    </div>
  )
}


