//import react
import React from "react";

//create react
class CartPage extends React.Component {
  state = {
    total: 0,
    count: 0,
  };
  //calculate count and price for each product
  calCart = () => {
    const total = this.props.orders
      .map((ele) => Number(ele.price.slice(0, 5)) * ele.count)
      .reduce((acc, init) => acc + init, 0);
    const count = this.props.orders
      .map((ele) => ele.count)
      .reduce((acc, init) => acc + init, 0);
    this.setState({ total, count });
  };

  render() {
    const item = this.props.order;
    return (
      <>
        <section className="cart-section">
          <div className="container">
            <div className="cart_titel">
              <h1>your cart</h1>
              {this.props.orders.length > 0 ? (
                this.props.orders.map((item) => {
                  return (
                    <>
                      <div className="cart-details">
                        <img
                          src={require("../img/" + item.image.split("/")[2])}
                          alt="productimg"
                        />
                        <h3 className="product-name">{item.name}</h3>
                        <h3 className="count">{item.count}</h3>
                        <h3 className="product-price">{item.price}</h3>
                        <div className="cart-butt">
                          <button
                            className="button  check-out"
                            onClick={() => this.calCart()}
                          >
                            check out
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div>
                  <h3 className="no-order">No orders yet!</h3>
                </div>
              )}
              {this.props.orders.length > 0 && (
                <div className="all-check-out">
                  <h3 className="all-items">all items</h3>
                  <h3 className="allcount">{this.state.count}</h3>
                  <h3 className="alltotal">{this.state.total}</h3>
                  <div className="cart-butt">
                    <button
                      className="button  check-out-all"
                      onClick={() => this.props.removeItem(item)}
                    >
                      Check out All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

//exports react
export default CartPage;
