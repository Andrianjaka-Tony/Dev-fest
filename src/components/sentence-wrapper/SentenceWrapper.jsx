import React, { useRef } from "react";
import "./SentenceWrapper.scss";
import { motion, useInView } from "framer-motion";

export const props = {
  sentence: "",
  once: true,
};

const senteceVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const wordVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function SentenceWrapper({ sentence = "", once = true }) {
  const sentenceRef = useRef();

  const inView = useInView(sentenceRef, { once });

  return (
    <motion.div
      ref={sentenceRef}
      variants={senteceVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="sentence-wrapper"
    >
      {Array.from(sentence.split(" ")).map((word, index) => (
        <span key={index} className="word">
          <motion.span variants={wordVariants}>{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
}
