import { Layout } from "antd";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import SkillSet from "./Skills/SkillSet";
import Portfolio from "./Profolio/Portfolio";
import "./Homepage.css";
import Anchor from "../Utils/Anchor";

const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Content className="homepage-content">
        <h1 className="name">Tianjian (Frost) Xu</h1>
        <AboutMe />
        <Experience />
        <SkillSet />
        <Portfolio />
      </Content>
      <Footer className="homepage-footer">
        Created by Tianjian Xu. Designed with{" "}
        <Anchor href="https://reactjs.org/">React</Anchor> and{" "}
        <Anchor href="https://ant.design/">Ant Design</Anchor>.
        <br />
        Art assests came from <Anchor href="https://www.flaticon.com/">Flaticon</Anchor>
      </Footer>
    </Layout>
  );
};

export default HomePage;
