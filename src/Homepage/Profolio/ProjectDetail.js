import React from "react";
import { Drawer, Layout } from "antd";
import "./ProjectDetail.css";

const { Content } = Layout;

const ProjectDetail = ({ title, detail, isVisible, setIsVisible }) => {
  return (
    <Drawer
      title={title}
      placement="bottom"
      closable={true}
      height="90vh"
      onClose={() => setIsVisible(false)}
      visible={isVisible}
    >
      <Content className="project-detail-content">
        {detail}
      </Content>
    </Drawer>
  );
};

export default ProjectDetail;
