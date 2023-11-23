import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import SentenceWrapper from "../sentence-wrapper/SentenceWrapper";
import HeroTargets from "./hero-targets/HeroTargets";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const props = {
  title: "",
  targets: [""],
  image: "",
};

const titleVariants = {
  initial: {
    y: 0,
  },
  animate: (scroll) => ({
    y: scroll * 300,
    transition: {
      duration: 0,
    },
  }),
};

const imageVariants = {
  initial: {
    filter: `grayscale(1)`,
    opacity: 0,
  },
  animate: (scroll) => ({
    opacity: 1,
    filter: `grayscale(${(1 - scroll) / 1.5})`,
    y: (1 - scroll) * 100,
    transition: {
      filter: {
        duration: 0,
      },
      y: {
        type: "tween",
      },
    },
  }),
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function Hero({ title = "", targets = [], image = "" }) {
  const heroRef = useRef();
  const [currentScroll, setCurrentScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentScroll(scrollYProgress.current);
    });
  }, [scrollYProgress]);

  return (
    <>
      <div ref={heroRef} className="hero-section">
        <motion.h1
          variants={titleVariants}
          custom={currentScroll}
          initial="initial"
          animate="animate"
          className="hero-title"
        >
          <SentenceWrapper sentence={title} once={false} />
        </motion.h1>
        <HeroTargets targets={targets} once={false} />
        <div className="image-container">
          <motion.img
            variants={imageVariants}
            custom={currentScroll}
            initial="initial"
            animate="animate"
            src={image}
            alt="hero illustration"
            className="hero-image"
          />
        </div>
      </div>
    </>
  );
}
