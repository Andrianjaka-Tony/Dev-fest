import React, { useEffect, useRef, useState } from "react";
import "./ScrollText.scss";
import { motion } from "framer-motion";

export const props = {
  items: [""],
  gap: 0,
  repeat: 0,
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function ScrollText({ items = [], gap = 0, repeat = 4 }) {
  const [width, setWidth] = useState(0);

  const ulRef = useRef();

  useEffect(() => {
    setWidth(ulRef.current.offsetWidth);
  }, []);

  /**
   *
   * @returns {string[]}
   */
  const createArray = () => {
    const response = [];
    for (let index = 0; index < repeat; index++) {
      response.push("");
    }
    return response;
  };

  return (
    <div className="scroller">
      <motion.ul
        ref={ulRef}
        animate={{
          x: -width / 2 - gap / 2,
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          },
        }}
        className="tag-list scroller-inner"
        style={{ gap: `${gap}px` }}
      >
        {createArray().map((element, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}
