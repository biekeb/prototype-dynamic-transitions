import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import * as d3 from 'd3';
import acdc from "./images/AC-DC-Logo.png";
import backvideo from "./images/acdc.mp4";
import play from './images/play.png';
import Member from './components/member';
import Typewriter from 'typewriter-effect';
import audioFragment from './images/AC-DC - Thunderstruck (Instrumental) (128 kbps).mp3';
import About from './components/about';



function App() {
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    // GSAP animation for fading
    const fadeAnimation = () => {
      gsap.to('.fade', { opacity: 0, duration: 1 });
    };

    // GSAP animation for the button entrance from the left
    const buttonAnimation = () => {
      gsap.fromTo(
        '#playButton', // Targeting the button by ID
        {
          x: -100, // Start from the left side (x = -100)
          rotation: 0, // Initial rotation (0 degrees)
          opacity: 0, // Initial opacity (hidden)
        },
        {
          x: 600, // Move to the right (x = 0)
          rotation: 360, // Rotate 360 degrees (full circle)
          opacity: 1, // Fade in
          duration: 1, // Animation duration
        }
      );
    };

    // D3 animation for text appearance
    const textAnimation = () => {
      d3.select('.text-container')
        .selectAll('p')
        .data(['The Beatles were a legendary British band.', 'They had a significant impact on music history.'])
        .enter()
        .append('p')
        .text((d) => d)
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .style('opacity', 1);
    };

    if (page === 1) {

      fadeAnimation();

      buttonAnimation(); // Trigger button animation
    } else if (page === 2) {
      textAnimation();
    }
  }, [page]);

  // Function to go to the next page
  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      {page === 1 && (
        <div className="page">
          
          <h1>            <Typewriter
  options={{
    strings: ['AC/DC'],
    autoStart: true,
    loop: true,
  }}
/></h1>
          <video className='background-video' src={backvideo} autoPlay muted loop></video>

          <button
            onClick={nextPage}
            style={{
              background: 'none',
              border: 'none',
              padding: '0',
              position: 'absolute',
              left: '0', // Start from the left side

            }}
            id="playButton"
          >
            <img className="play" src={play} alt="" />
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          
                    <Member />

          <div className="text-container"></div>
          <button onClick={nextPage}>Next Page</button>
                    {/* <audio src={audioFragment} autoPlay controls /> */}
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <About />
        </div>
      )}

    </div>
  );
}

export default App;
