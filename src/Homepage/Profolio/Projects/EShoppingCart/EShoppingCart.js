import EShoppingCartDetail from "./EShoppingCartDetail";
import projectTags from "../ProjectTags";
import cover from "./cover.png";

const EShoppingCart = {
  name: "eShoppingCart",
  description: "An online shopping website.",
  cover: cover,
  tags: [projectTags.web, projectTags.spring],
  detail: <EShoppingCartDetail /> 
};

export default EShoppingCart;
