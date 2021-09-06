import projectTags from "../ProjectTags";
import ProEventoDetail from "./ProEventoDetail";
import cover from "./cover.png";

const ProEvento = {
  name: "ProEvento",
  cover: cover,
  description: "A social media mobile app featuring live streaming.",
  tags: [
    projectTags.mobile,
    projectTags.reactnative,
    projectTags.spring,
    projectTags.twilio,
  ],
  detail: <ProEventoDetail />,
};

export default ProEvento;
