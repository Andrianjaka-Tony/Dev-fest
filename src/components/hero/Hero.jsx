import React from "react";
import "./Hero.scss";
import SentenceWrapper from "../sentence-wrapper/SentenceWrapper";
import HeroTargets from "./hero-targets/HeroTargets";

export const props = {
  title: "",
  targets: [""],
  image: "",
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function Hero({ title = "", targets = [], image = "" }) {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        <SentenceWrapper sentence={title} once={false} />
      </h1>
      <HeroTargets targets={targets} once={false} />
      <div className=""></div>
      <img src={image} alt="hero illustration" className="hero-image" />
    </div>
  );
}
