import React from "react";
import footage from "./toontankfootage.gif";

const ToonTankDetail = () => (
  <>
    <h2>ToonTank</h2>
    <p>
      ToonTank is a cartton style tank battle game built with Unreal Engine 4.
      The player-controlled tank will need to destroy all the AI-controlled
      turrets and tanks on the level. The AI logic of this game is implemented 
      using Unreal's Behavior Tree.
    </p>
    <img src={footage} alt="ToonTank Gameplay Footage" width="100%" />

  </>
);

export default ToonTankDetail;
