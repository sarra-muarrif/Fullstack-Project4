//import react
import React from "react";
//import NavLink
import { NavLink } from "react-router-dom";

//create react
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <nav className="footer-nav">
          <ul>
            <li>
              <NavLink exact to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/customer care">
                customer care
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/instagram">
                instagram
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="copyrights">
          <p>© Pretend Store</p>
        </div>
      </div>
    </section>
  );
};

//exports react
export default Footer;
