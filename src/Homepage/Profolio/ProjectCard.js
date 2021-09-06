import React, { useState } from "react";
import { Card, Tag } from "antd";
import ProjectDetail from "./ProjectDetail";
import "./ProjectCard.css";

const Meta = Card;

const ProjectCard = ({ coverSrc, title, description, tags, detail }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleOnClick = () => {
    setIsOverlayVisible(true);
  };

  // Create a list of tag items given the project tag component list.
  const makeTagComponents = (tagItemList, outList) => {
    tagItemList.forEach((tagItem, index) => {
      outList.push(
        <Tag key={index} color={tagItem.color}>
          {tagItem.content}
        </Tag>
      );
    });
  };

  let tagComponents = [];
  makeTagComponents(tags, tagComponents);

  return (
    <>
      <Card
        hoverable
        cover={<img className="cover-image" src={coverSrc} alt={title} />}
        onClick={handleOnClick}
      >
        <Meta title={title} bordered={false}>
          <p className="project-card-description">{description}</p>
          <div className="project-card-tags-wrapper">{tagComponents}</div>
        </Meta>
      </Card>
      <ProjectDetail
        title={title}
        detail={detail}
        isVisible={isOverlayVisible}
        setIsVisible={setIsOverlayVisible}
      />
    </>
  );
};

export default ProjectCard;
