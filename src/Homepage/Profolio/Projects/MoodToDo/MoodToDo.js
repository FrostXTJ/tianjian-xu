import projectTags from "../ProjectTags";
import MoodToDoDetail from "./MoodToDoDetail";
import cover from "./cover.png";

const MoodToDo = {
  name: "MoodToDo",
  cover: cover,
  description: "An entertainment recommendation web app.",
  tags: [projectTags.web, projectTags.java],
  detail: <MoodToDoDetail />,
};

export default MoodToDo;
