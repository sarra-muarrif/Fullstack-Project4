//import react
import React from "react";
//import withRouter
import { withRouter } from "react-router";

//create react
class Details extends React.Component {
  itemId = this.props.match.params.id;
  item = this.props.items.find((item) =>
    item.image.split("/")[2].includes(this.itemId)
  );

  state = {
    count: 1,
    name: "",
  };
  //incrementcount for product
  incrementCount = () => {
    this.setState({ count: 1 + this.state.count }, () => {
      this.item.count = this.state.count;
    });
  };
  //change color
  onChangeHandler = (color) => {
    this.setState({ name: color });
  };

  render() {
    const count = this.state.count;
    const item = this.item;
    console.log(item ,"details page")

    return (
      <>
        <section className="details-section">
          <div className="container">
            <div className="details_img">
              <img
                src={require("../img/" + item.image.split("/")[2])}
                alt="productimg"/>
            </div>
            <div className="product-details">
              <h3 className="product-details-price">{item.price}</h3>
              <h3 className="product-details-name">{item.name}</h3>
              <p className="product-details-description">{item.description}</p>
              <div className="product color-description">
                <h3 className="choose-color">color:{this.state.name}</h3>
                <div className="color-button">
                  <button
                    id="pink-button"
                    onClick={() => this.onChangeHandler("pink")}>
                  </button>
                  <button
                    id="blue-button"
                    onClick={() => this.onChangeHandler("blue")}>
                  </button>
                  <button
                    id="black-button"
                    onClick={() => this.onChangeHandler("black")}>
                    </button>
                </div>
              </div>
              <div className="cart-button">
                <button
                  className="button  number"
                  onClick={() => this.incrementCount()}>
                  {count}
                </button>
                <button
                  className="button  Add-cart"
                  onClick={() => this.props.catchItem(item)}>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

// export react
export default withRouter(Details);

