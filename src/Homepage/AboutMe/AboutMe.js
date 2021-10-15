import React from "react";
import { Avatar } from "antd";
import "./AboutMe.css";
import Emoji from "../../Utils/Emoji";
import Anchor from "../../Utils/Anchor";
import ProfileImage from "./profile-image.jpg";

const AboutMe = () => (
  <div className="about-me-wrapper">
    <div className="avatar-contact-wrapper">
      <Avatar
        src={ProfileImage}
        size={{ xs: 196, sm: 196, md: 256, lg: 256, xl: 300, xxl: 300 }}
      />
      <p className="contact-info">
        <Anchor href="https://www.linkedin.com/in/tianjian-xu-708665171/"> LinkedIn </Anchor>{" "} 
        - <Anchor href="https://my.indeed.com/p/tianjianx-srwebdg">Indeed</Anchor>{" "}
        - <Anchor href="https://github.com/FrostXTJ">GitHub</Anchor>
      </p>
    </div>
    <div className="biography-wrapper">
      <h2>About Me</h2>
      <p className="greetings">
        <Emoji symbol="👋" label="waving hand" /> Greetings, my friend!
      </p>
      <p>
        I am currently an undergraduate student at{" "}
        <a
          href="https://www.usc.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Southern California
        </a>
        , pursuing a bachelor degree in{" "}
        <a
          href="https://www.cs.usc.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computer Science
        </a>
        , and a minor in{" "}
        <a
          href="https://itp.usc.edu/academics/applied-analytics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Applied Analytics
        </a>
        . My fields of interest include data engineering, web technology, 
        and video game development.
      </p>
    </div>
  </div>
);

export default AboutMe;
