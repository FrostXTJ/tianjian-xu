import React from "react";
import { Tooltip } from "antd";
import "./SkillIcon.css";

const SkillIcon = ({ src, caption, comment }) => (
  <div className="skill-icon-wrapper">
    <div className="skill-icon-image-wrapper">
      <Tooltip title={comment}>
        <img className="skill-icon-image" src={src} alt={caption} />
      </Tooltip>
    </div>
    <p className="skill-icon-caption">{caption}</p>
  </div>
);

export default SkillIcon;
