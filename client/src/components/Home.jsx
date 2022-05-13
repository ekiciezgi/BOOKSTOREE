import React from 'react';
import '../App.css';
import './Home.css';
import video from "../videos/video.mp4"
function Home() {
  return (
    <div className='hero-container'>
 <video src={video} autoPlay loop muted />
 
    </div>
  );
}

export default Home;