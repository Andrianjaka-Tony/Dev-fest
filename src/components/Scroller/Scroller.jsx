import React, { useEffect, useState } from "react";
import "./Scroller.scss";
import Lenis from "@studio-freight/lenis";

const Scroller = ({ lenis }) => {
  const [visisbility, setVisibility] = useState(false);

  const checkScroll = () => {
    var scrollAmount = window.scrollY;
    if (scrollAmount > 120) {
      setVisibility(true);
    } else setVisibility(false);
  };

  const scrollTop = () => {
    lenis.scrollTo(document.getElementsByTagName("html")[0]);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={`scroll_box ${visisbility ? " show_scroll_box" : ""}`} onClick={scrollTop}>
      *
    </div>
  );
};

export default Scroller;
