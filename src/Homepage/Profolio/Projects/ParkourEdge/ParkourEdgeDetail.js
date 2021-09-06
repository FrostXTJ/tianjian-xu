import React from "react";
import footage from "./ParkourEdgeFootage.gif"

const ParkourEdgeDetail = () => (
  <>
    <h2>Parkour's Edge</h2>
    <p>
        Parkour's Edge is 3D platform parkour game. The player will controll
        the character in the game to perform parkour moves such as sprinting, 
        wall climbing, and wall running. The game is built with C++ and SDL.
    </p>
    <img src={footage} alt="Parkour's Edge Footage" width="100%" />
  </>
);

export default ParkourEdgeDetail;
