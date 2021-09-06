import img_cpp from "./images/cpp.png";
import img_java from "./images/java.png";
import img_python from "./images/python.png";
import img_javascript from "./images/javascript.png";
import img_sql from "./images/sql.png";
import img_lua from "./images/lua.png";
import img_unreal from "./images/unreal.png";
import img_spring from "./images/spring.png";
import img_django from "./images/django.png";
import img_react from "./images/react.png";
import img_opengl from "./images/opengl.png";
import img_pytorch from "./images/pytorch.png";
import img_sklearn from "./images/sklearn.png";
import img_mongodb from "./images/mongodb.png";
import img_junit from "./images/junit.png";
import img_hibernate from "./images/hibernate.png";
import img_aws from "./images/aws.png";
import img_git from "./images/git.png";
import img_svn from "./images/svn.png";
import img_vim from "./images/vim.png";
import img_ai from "./images/ai.png";
import img_ml from "./images/ml.png";
import img_graphics from "./images/graphics.png";
import img_networks from "./images/networks.png";
import img_china from "./images/china.png";
import img_usa from "./images/usa.png";
import img_japan from "./images/japan.png";
import img_french from "./images/france.png";
import img_guitar from "./images/guitar.png";
import img_breaking from "./images/breaking.png";

export const skillCategories = [ "game", "web", "data", "life" ];

export const skills = [
  {
    name: "C++",
    types: ["game", "web", "data"],
    image: img_cpp
  },
  {
    name: "Java",
    types: ["web", "data"],
    image: img_java 
  },
  {
    name: "Python",
    types: ["web", "data"],
    image: img_python 
  },
  {
    name: "JavaScript",
    types: ["web"],
    image: img_javascript
  },
  {
    name: "SQL",
    types: ["web", "data"],
    image: img_sql
  },
  {
    name: "Lua",
    types: ["game", "web"],
    image: img_lua
  },
  {
    name: "Unreal Engine",
    types: ["game"],
    image: img_unreal
  },
  {
    name: "Spring",
    types: ["web"],
    image: img_spring
  },
  {
    name: "Django",
    types: ["web"],
    image: img_django
  },
  {
    name: "React",
    types: ["web"],
    image: img_react,
    comment: "This webpage is built by React."
  },
  {
    name: "OpenGL",
    types: ["game"],
    image: img_opengl
  },
  {
    name: "PyTorch",
    types: ["data"],
    image: img_pytorch
  },
  {
    name: "sklearn",
    types: ["data"],
    image: img_sklearn
  },
  {
    name: "MongoDB",
    types: ["web", "data"],
    image: img_mongodb
  },
  {
    name: "JUnit",
    types: ["web"],
    image: img_junit 
  },
  {
    name: "Hibernate",
    types: ["web", "data"],
    image: img_hibernate 
  },
  {
    name: "AWS",
    types: ["web", "data"],
    image: img_aws
  },
  {
    name: "Git",
    types: ["game", "web", "data"],
    image: img_git 
  },
  {
    name: "SVN",
    types: ["game", "web", "data"],
    image: img_svn
  },
  {
    name: "Vim",
    types: ["game", "web", "data"],
    image: img_vim,
    comment: "Vim is the greatest code editor of all time."
  },
  {
    name: "Artificial Intelligence",
    types: ["game", "web", "data"],
    image: img_ai 
  },
  {
    name: "Machine Learning",
    types: ["web", "data"],
    image: img_ml
  },
  {
    name: "Computer Graphics",
    types: ["web", "game"],
    image: img_graphics
  },
  {
    name: "Computer Networks",
    types: ["game", "web", "data"],
    image: img_networks
  },
  {
    name: "Chinese",
    types: ["life"],
    image: img_china,
    comment: "Native speaker"
  },
  {
    name: "English",
    types: ["life"],
    image: img_usa,
    comment: "Proficient"
  },
  {
    name: "Japanese",
    types: ["life"],
    image: img_japan,
    comment: "Hobbyist"
  },
  {
    name: "French",
    types: ["life"],
    image: img_french,
    comment: "Je parle un peu de français. But already rusted :("
  },
  {
    name: "Guitar",
    types: ["life"],
    image: img_guitar 
  },
  {
    name: "Breaking",
    types: ["life"],
    image: img_breaking 
  }
];