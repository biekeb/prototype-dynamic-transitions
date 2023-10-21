import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSpring, animated } from "@react-spring/web";

import Malcolm from "../images/Malcolm_Young.jpg";
import Malcolm2 from "../images/Malcolm-Young-2.jpg";
import angus from "../images/agnus.jpg";
import angus2 from "../images/agnus2.jpg";
import bon from "../images/BonScott.jpg";
import bon2 from "../images/bon2.jpg";

import cliff from "../images/cliff.jpg";
import cliff2 from "../images/cliff2.jpg";

import phil from "../images/phil.jpg";
import phil2 from "../images/phil2.webp";

const Member = () => {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });

  const bandMembersData = [
    {
      name: "Malcolm Young",
      role: "slag gitaar",
      images: {
        image1: Malcolm,
        image2: Malcolm2,
      },
    },
    {
      name: "Agnus Young",
      role: "Leadgitarist",
      images: {
        image1: angus,
        image2: angus2,
      },
    },
    {
      name: "Bon Scott",
      role: "Leadzanger",
      images: {
        image1: bon,
        image2: bon2,
      },
    },
    {
      name: "Cliff Williams",
      role: "basgitaar",
      images: {
        image1: cliff,
        image2: cliff2,
      },
    },
    {
      name: "Phil Rudd",
      role: "Drum",
      images: {
        image1: phil,
        image2: phil2,
      },
    },
  ];

  const imageStyle = {
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
  };

  // Define state to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div
      style={{
        ...springs,
      }}
    >
      <h2>OG Members</h2>
      {bandMembersData.map((member, index) => (
        <motion.div
          key={index}
          className={`member ${member.name.toLowerCase()}`}
          style={{
            ...imageStyle,
          }}
        >
          <div className="member-name">
            <motion.h3 >{member.name}</motion.h3>
          </div>
          <div className="member-div">
            <animated.div style={{ ...springs }} className="image1">
              <motion.div

                className="image-mask"
              >
                <motion.img
                  src={member.images.image1}
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            </animated.div>
            <div>
              <motion.h4>{member.role}</motion.h4>
            </div>
            <animated.div style={{ ...springs }} className="image2">
              <div className="image-mask">
                <motion.img
                  src={member.images.image2}
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
              </div>
            </animated.div>
          </div>
        </motion.div>
      ))}
    </animated.div>
  );
};
export default Member;
