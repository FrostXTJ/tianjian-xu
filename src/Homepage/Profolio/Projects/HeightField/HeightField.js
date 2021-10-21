import projectTags from "../ProjectTags";
import HeightFieldDetail from "./HeightFieldDetail";
import cover from "./cover.png";

const HeightField = {
  name: "3D Terrain Visualization",
  description: "A visualization tool that converts heightmap image into 3D interactive landscape.",
  cover: cover,
  tags: [projectTags.graphics],
  detail: <HeightFieldDetail />,
};

export default HeightField;
