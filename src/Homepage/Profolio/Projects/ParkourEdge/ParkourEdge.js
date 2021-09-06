import projectTags from "../ProjectTags";
import ParkourEdgeDetail from "./ParkourEdgeDetail";
import cover from "./cover.png";

const ParkourEdge = {
  name: "Parkour's Edge",
  cover: cover,
  description: "A 3D platformer parkour game.",
  tags: [projectTags.game, projectTags.sdl],
  detail: <ParkourEdgeDetail />,
};

export default ParkourEdge;
