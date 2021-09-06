import React from "react";
import { Timeline } from "antd";
import Anchor from "../../Utils/Anchor";
import "./Experience.css";

const Experience = () => (
  <div className="experience-wrapper">
    <div className="working-experience-wrapper">
      <h2>Experience</h2>
      <Timeline>
        <Timeline.Item>
          SDE Intern @ Tenecnt
          <p className="experience-description">
            Developed SDK for{" "}
            <Anchor href="https://www.pubgmobile.com/en-US/home.shtml">
              <i>PUBG Mobile</i>
            </Anchor>
          </p>
        </Timeline.Item>
        <Timeline.Item>
          Undergrad Research Assistant @ USC Data Science Lab
          <p className="experience-description">
            Worked on a{" "}
            <Anchor href="https://scc-usc.github.io/ReCOVER-COVID-19/#/">
              COVID-19 modeling and forecasting
            </Anchor>{" "}
            research project.
            <br />
            Our work got featured by{" "}
            <Anchor href="https://www.cdc.gov/coronavirus/2019-ncov/science/forecasting/forecasting-us.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcovid-data%2Fforecasting-us.html">
              CDC
            </Anchor>
            .
          </p>
        </Timeline.Item>
        <Timeline.Item>
          Data Enginner Intern @ Grandhonor
          <p className="experience-description">
            A computer vision start-up company.
          </p>
        </Timeline.Item>
      </Timeline>
    </div>
    <div className="education-experience-wrapper">
      <h2>Education</h2>
      <Timeline>
        <Timeline.Item color="red">
          University of Southern California
          <p className="experience-description">
              B.S. in Computer Science<br />
              - Engineering Mathematics Prize (top 4 students)<br />
              - W3PHIAI-21 Student Scholarship<br />
              - Academic Achievenment Award<br /> </p>
        </Timeline.Item>
        <Timeline.Item>
          Rensselaer Polytechnic Institute
          <p className="experience-description">
              B.S. in Computer Science (<i>Transferred, Degree Not Granted</i>)
          </p>

        </Timeline.Item>
      </Timeline>
    </div>
  </div>
);

export default Experience;
