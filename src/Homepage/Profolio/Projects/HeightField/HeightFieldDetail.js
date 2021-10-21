import React from "react";
import demo from "./demo.gif"

const HeightFieldDetail = () => (
  <>
    <h2>3D Landscape Visualization</h2>
    <p>
        A visualization tool that converts JPEG format heightmap image into 
        interactive 3D lanscapde. The tool supports different render styles 
        (points, lines, triangle meshes) and allows free manipulation of the 
        landscape. The tool is built with C++ and OpenGL, and here is a brief
        demo of it rendering the Santa Monica Mountain in different styles:
      
    </p>
    <img src={demo} alt="Rendering the Santa Monica Mountain" width="100%" />
  </>
);

export default HeightFieldDetail;
