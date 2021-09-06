import React from "react";
import Anchor from "../../../../Utils/Anchor";
import screenshot from "./wiseupscreenshot.png";

const WiseUpDetail = () => (
  <>
    <h2>WiseUp</h2>
    <p>
      WiseUp, at its core, is a sort of quiz application that awards users for
      correctly completing chapters, which are sets of questions. Each chapter
      has a central theme and completing them in various degrees of correctness
      may yield various degrees of rewards and achievements. The application is
      gamified as an incentive for our users to do well and compete against
      their friends on the leaderboard. With our in-game coin earned through
      answering questions correctly or competing in our Versus mode, users can
      buy shiny new avatars, XP/coin boosters, or even practice investing in
      real-world companies by buying virtual stocks.
    </p>
    <p>
      The codebase of WiseUp is open-sourced on{" "}
      <Anchor href="https://github.com/boyuanx/WiseUp_iOS">GitHub.</Anchor>
    </p>
    <br />
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={screenshot} alt="WiseUp Screenshot" width="300px" />
    </div>
  </>
);

export default WiseUpDetail;
