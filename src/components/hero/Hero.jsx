import React from "react";
import "./Hero.scss";

export const props = {
  title: "",
  image: "",
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function Hero({ title, image }) {
  return (
    <div className="hero-section">
      <h1 className="hero-title">{title}</h1>
      <img src={image} alt="hero illustration" className="hero-image" />
    </div>
  );
}
