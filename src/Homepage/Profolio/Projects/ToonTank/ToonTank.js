import projectTags from "../ProjectTags";
import ToonTankDetail from "./ToonTankDetail";
import cover from "./cover.png";

const ToonTank = {
  name: "Toon Tank",
  cover: cover,
  description: "A cartoon style tank battle game built with Unreal Engine 4.",
  detail: <ToonTankDetail />,
  tags: [projectTags.game, projectTags.unreal],
};

export default ToonTank;
