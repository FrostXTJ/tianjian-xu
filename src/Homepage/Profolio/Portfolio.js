import React from "react";
import { Space } from "antd";
import ProjectCard from "./ProjectCard";
import projects from "./Projects/Projects";
import "./Portfolio.css";

const Portfolio = () => {
  // Generate a list of project cards with the given the project list.
  const makeProjectCards = (projectList, outCardList) => {
    projectList.forEach((project, index) => {
      outCardList.push(
        <ProjectCard
          key={index}
          title={project.name}
          description={project.description}
          tags={project.tags}
          detail={project.detail}
          coverSrc={project.cover}
        />
      );
    });
  };

  let projectCards = [];
  makeProjectCards(projects, projectCards);

  return (
    <div className="portfolio-wrapper">
      <h2>Portfolio</h2>
      <Space wrap className="project-cards-wrapper" size="large">
        {projectCards}
      </Space>
    </div>
  );
};

export default Portfolio;
