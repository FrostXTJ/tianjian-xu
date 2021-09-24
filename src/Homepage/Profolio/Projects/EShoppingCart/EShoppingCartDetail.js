import React from "react";
import cover from "./cover.png";
import shoppingcartscreenshot from "./shoppingcart.png";
import orderingpagescreenshot from "./orderingpage.png";

const EShoppingCartDetail = () => (
  <>
    <h2>eShoppingCart</h2>
    <p>
      eShoppingCart is a general-purpose online shopping system. It includes 
      basic functionalties such as product ordering process, user authentication 
      and authorization, and product searching and filtering. The system is 
      implemented with the Java Spring framework.
    </p>

    <img src={cover} alt="eShoppingCart Webpage" width="100%" />
    <img src={shoppingcartscreenshot} alt="eShoppingCart Webpage" width="100%" />
    <img src={orderingpagescreenshot} alt="eShoppingCart Webpage" width="100%" />
  </>
);

export default EShoppingCartDetail;