//import react
import React from "react";

//import image
import mailinglistpic from "../img/mailing-list-img.png";

//create react
const MailingList = () => {
  return (
    <section className="singn-up for mailing-list">
      <div className="container">
        <img className="mailing-pic" src={mailinglistpic} alt="mailingpic" />
        <div className="mailinglist-content">
          <h2>Sign up for our newsletter and get 10% off your next order.</h2>
          <form className="mailing-label">
            <input id="mailing" type="email" placeholder="your email" />
            <button id="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

//exports react
export default MailingList;
