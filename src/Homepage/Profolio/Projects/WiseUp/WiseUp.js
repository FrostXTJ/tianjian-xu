import projectTags from "../ProjectTags";
import WiseUpDetail from "./WiseUpDetail";
import cover from "./cover.png";

const WiseUp = {
  name: "WiseUp",
  cover: cover,
  description: "A financial literacy mobile app.",
  tags: [projectTags.mobile],
  detail: <WiseUpDetail />
};

export default WiseUp;
