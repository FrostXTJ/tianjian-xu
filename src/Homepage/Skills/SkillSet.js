import React from "react";
import { Tabs, Space } from "antd";
import SkillIcon from "./SkillIcon";
import { skills } from "./Skills";

const { TabPane } = Tabs;

const SkillSet = () => {
  // Generate a map of {skill_type, [skill_icons]}
  const makeSkillIconMap = (skillList, outIconMap) => {
    skillList.forEach((skill, i) => {
      const icon = (
        <SkillIcon
          key={i}
          src={skill.image}
          caption={skill.name}
          comment={skill.comment}
        />
      );
      outIconMap["all"].push(icon);
      skill.types.forEach(type => {
        outIconMap[type].push(icon);
      });
    });
  };

  let iconMap = {
    all: [],
    game: [],
    web: [],
    data: [],
    life: [],
  };

  makeSkillIconMap(skills, iconMap);

  return (
    <div className="skill-set-wrapper">
      <h2>My Perks</h2>
      <Tabs defaultActiveKey="all">
        <TabPane tab="All" key="all">
          <Space wrap>{iconMap["all"]}</Space>
        </TabPane>
        <TabPane tab="Web Technology" key="web">
          <Space wrap>{iconMap["web"]}</Space>
        </TabPane>
        <TabPane tab="Game Dev" key="game">
          <Space wrap>{iconMap["game"]}</Space>
        </TabPane>
        <TabPane tab="Data Engineer" key="data">
          <Space wrap>{iconMap["data"]}</Space>
        </TabPane>
        <TabPane tab="Life" key="life">
          <Space wrap>{iconMap["life"]}</Space>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SkillSet;
