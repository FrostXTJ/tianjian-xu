import React from "react";
import Anchor from "../../../../Utils/Anchor";
import webpage from "./webpage.png";

const ReCOVERDetail = () => (
  <>
    <h2>
      ReCOVER: Accurate Predictions and Scenario Projections for COVID-19
      Epidemic Response
    </h2>
    <p>
      ReCOVER is an NSF-funded research project that aims to model and forecast
      the spread of COVID-19 epidemic. We use our own epidemic model called{" "}
      <Anchor href="https://arxiv.org/abs/2007.05180">SI-kJalpha</Anchor>, and
      the model's forecasts appear on the official{" "}
      <Anchor href="https://www.cdc.gov/coronavirus/2019-ncov/science/forecasting/forecasting-us.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcovid-data%2Fforecasting-us.html">
        CDC webpage
      </Anchor>
      . Our model can consider the effect of many complexities of the epidemic
      process and yet be simplified to a few parameters that are learned using
      fast linear regressions. Therefore, our approach can learn and generate
      forecasts extremely quickly.
    </p>
    <p>
      To learn more about our project and see its visualization, you may visit
      our project website:{" "}
      <Anchor href="https://scc-usc.github.io/ReCOVER-COVID-19/#/">
        https://scc-usc.github.io/ReCOVER-COVID-19
      </Anchor>
    </p>
    <br />
    <img src={webpage} alt="Project Webpage" width="100%" />
  </>
);

export default ReCOVERDetail;
