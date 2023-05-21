import React from "react";
import { image } from "../data/data";
function About() {
  const image = "images/about.png";

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I have struggled pal</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
