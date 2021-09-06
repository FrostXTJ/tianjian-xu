import React from "react";
import footage from "./pacmanfootage.gif";

const PacManDetail = () => (
  <>
    <h2>PacMan Remake</h2>
    <p>
      Remake of the classical Pac-Man game that reproduces the original game's
      GUI and mechanism with C++ and SDL. The logic of the ghost AI is
      implemented in a state machine design and the path-finding is implemented
      using A* algorithm.
    </p>
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={footage} alt="PacMan Gameplay Footage" width="50%" />
    </div>
  </>
);

export default PacManDetail;
