import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import pic from "../images/ACDC-Large.jpg";
import impact from "../images/impact.png";

export default function About() {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={0.1} speed={0.2}>
        <h1 style={{ zIndex: "999" }}>Who is AC/DC?</h1>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        offset={0.3}
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
        offset={0.6}
        speed={1.5}
      >
        <p style={{ zIndex: "1" }}>
          AC/DC, the iconic Australian rock band, was born in 1973 through the
          musical genius of Malcolm Young and Angus Young. Today, the band rocks
          on with Angus, bassist Cliff Williams, drummer Phil Rudd, lead
          vocalist Brian Johnson, and rhythm guitarist Stevie Young (Angus's
          nephew).
          <br />
          <br />
          Their genre-defying sound? They call it "rock and roll," but it's been
          described as hard rock, blues rock, and even heavy metal. They're
          legendary not just for their music, but for shaping rock history.
          AC/DC's electrifying presence inspired bands like Iron Maiden and
          Saxon, and in 2003, they were immortalized in the Rock and Roll Hall
          of Fame.
        </p>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          padding: "3% 20%",
          width: "60%",
        }}
        offset={1}
        speed={1}
      >
        <h2>
          <strong>Cultural Impact:</strong>
        </h2>
        <p>
          AC/DC's music has had a profound cultural impact, permeating popular
          culture. Their songs have been featured in numerous movies, TV shows,
          and commercials, showcasing their enduring appeal across generations.
          The band's electrifying stage performances and iconic "Angus Young
          schoolboy" persona have become legendary in the world of rock music.
        </p>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          height: "80vh",
        }}
        offset={1.7}
        speed={1}
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
      
    </Parallax>
  );
}
