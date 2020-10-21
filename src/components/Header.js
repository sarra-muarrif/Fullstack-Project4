//import react
import React from "react";
//import NavLink
import { NavLink } from "react-router-dom";

//import image
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";

//create react
const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <NavLink exact to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink exact to="/">
                home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/collection">
                collection
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="cart-group">
          <img src={cart} alt="cartpic" />
          <NavLink exact to="/cart" className="cart">
            cart
          </NavLink>
        </div>
      </div>
    </section>
  );
};

//exports react
export default Header;
