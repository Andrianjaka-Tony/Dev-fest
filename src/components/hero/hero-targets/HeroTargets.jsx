import React, { useRef } from "react";
import "./HeroTargets.scss";
import { motion, useInView } from "framer-motion";

export const props = {
  targets: [],
  once: true,
};

const divVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const spanVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "circOut",
    },
  },
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function HeroTargets({ targets = [], once = true }) {
  const divRef = useRef();

  const inView = useInView(divRef, { once });

  return (
    <motion.div
      ref={divRef}
      variants={divVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="hero-targets"
    >
      {targets.map((target, index) => (
        <motion.span variants={spanVariants} key={index}>
          {target}
        </motion.span>
      ))}
    </motion.div>
  );
}
