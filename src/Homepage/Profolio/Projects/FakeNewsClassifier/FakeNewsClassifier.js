import projectTags from "../ProjectTags";
import FakeNewsClassifierDetail from "./FakeNewsClassifierDetail";
import cover from "./cover.png";

const FakeNewsClassifier = {
  name: "Fake News Classifier",
  description: "A neural network that is trained to classify fake news.",
  cover: cover,
  tags: [projectTags.ml, projectTags.nlp, projectTags.pytorch],
  detail: <FakeNewsClassifierDetail />,
};

export default FakeNewsClassifier;
