//import react
import React from "react";

//create react
class contact extends React.Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    alert("Thank you " + this.state.value + " your massage is sendeing");
  };

  render() {
    return (
      <section className="contact">
        <div className="container">
          <h2 className="contact-titel">contact us</h2>
          <p className="contact-paragragh">
            got a question?we'd love to hear from you.send us a message and
            we'll respond as soon as possible
          </p>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <label>name:</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
            <label>email address:</label>
            <input type="email"></input>
            <label>massage:</label>
            <input type="textarea"></input>
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </section>
    );
  }
}

//exports react
export default contact;
