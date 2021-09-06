import projectTags from "../ProjectTags";
import PacManDetail from "./PacManDetail";
import cover from "./cover.png";

const PacMan = {
  name: "Pac-Man Remake",
  cover: cover,
  description: "Remake of the classical Pac-Man game.",
  tags: [projectTags.game, projectTags.ai, projectTags.sdl],
  detail: <PacManDetail />,
};

export default PacMan;
