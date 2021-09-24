import projectTags from "../ProjectTags";
import ReCOVERDetail from "./ReCOVERDetail";
import cover from "./cover.png";

const ReCOVER = {
  name: "ReCOVER",
  description: "A predictive mathematic models of the COVID-19 pandemic.",
  cover: cover,
  tags: [
    projectTags.ml,
    projectTags.datamining,
    projectTags.web,
    projectTags.django,
    projectTags.react,
  ],
  detail: <ReCOVERDetail />,
};

export default ReCOVER;
