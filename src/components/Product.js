//import react
import React from "react";
//import Link
import { Link } from "react-router-dom";

//create react
const Product = (props) => {
  return (
    <li className="products">
      <Link to={"/Detils/" + props.item.image.split("/")[2]}>
        <img
          src={require("../img/" + props.item.image.split("/")[2])}
          alt={props.item.name}/>
      </Link>
      <div className="product-description">
        <h3 className="product-name">{props.item.name}</h3>
        <h3 className="product-price">{props.item.price}</h3>
      </div>
    </li>
  );
};

//exports react
export default Product;
