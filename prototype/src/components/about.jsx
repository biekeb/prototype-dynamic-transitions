import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import pic from "../images/ACDC-Large.jpg";
import impact from "../images/impact.jpg";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";

export default function About() {
  const parallax = useRef(null);

  const button = document.getElementById("myButton");

  // Create a GSAP timeline for the flickering animation
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 6.13996 });

  // Add animations to the timeline
  tl.to(button, { borderColor: "blue", duration: 0.1, yoyo: true, repeat: 1 });
  tl.to(button, {
    borderColor: "transparent",
    duration: 0.1,
    yoyo: true,
    repeat: 1,
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0.1} speed={0.2}>
          <h2 style={{ fontSize: "5rem" }}>Who is</h2>

          <h1
            style={{
              marginTop: "-50px",
              fontSize: "10rem",
              textShadow: "2px 2px 2px yellow",
            }}
          >
            <Typewriter
              options={{
                strings: ["AC/DC"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          offset={0.4}
          speed={0.01}
        >
          <img
            style={{
              width: "50%",
            }}
            src={pic}
            alt=""
          />
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            padding: "3% 20%",
            width: "60%",
          }}
          offset={1}
          speed={1}
        >
          <p style={{ zIndex: "1" }}>
            AC/DC, the iconic Australian rock band, was born in 1973 through the
            musical genius of Malcolm Young and Angus Young. Today, the band
            rocks on with Angus, bassist Cliff Williams, drummer Phil Rudd, lead
            vocalist Brian Johnson, and rhythm guitarist Stevie Young (Angus's
            nephew).
            <br />
            <br />
            Their genre-defying sound? They call it "rock and roll," but it's
            been described as hard rock, blues rock, and even heavy metal.
            They're legendary not just for their music, but for shaping rock
            history. AC/DC's electrifying presence inspired bands like Iron
            Maiden and Saxon, and in 2003, they were immortalized in the Rock
            and Roll Hall of Fame.
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            height: "80vh",
          }}
          offset={1.7}
          speed={0.9}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={impact}
            alt=""
          />
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            padding: "3% 20%",
            width: "60%",
          }}
          offset={2}
          speed={1.4}
        >
          <h2>
            <strong>Cultural Impact:</strong>
          </h2>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            padding: "3% 20%",
            width: "60%",
          }}
          offset={2.2}
          speed={1.3}
        >
          <p>
            AC/DC's music has had a profound cultural impact, permeating popular
            culture. Their songs have been featured in numerous movies, TV
            shows, and commercials, showcasing their enduring appeal across
            generations. The band's electrifying stage performances and iconic
            "Angus Young schoolboy" persona have become legendary in the world
            of rock music.
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            height: "80vh",
          }}
          offset={2.6}
          speed={1}
        >
          <button className="button">
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              href="https://www.acdc.com/"
            >
              find more about ACDC
            </a>
          </button>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
