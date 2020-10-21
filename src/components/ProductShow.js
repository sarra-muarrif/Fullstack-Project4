//import react
import React from "react";

//import components
import Product from "./Product";

//create react
class ProductShow extends React.Component {
  state = {
    products: [],
    moreProducts: 3,
  };
//first: show 3 products
  componentDidMount() {
    this.setState({ products: this.props.items.slice(0, 3) });
  }
//show more products 
  incrementItems = () => {
    this.setState({ moreProducts: this.state.moreProducts + 3 });
    this.setState({
      products: this.props.items.slice(0, this.state.moreProducts),
    });
  };
  render() {
    const productlist = this.state.products.map((item) => {
      return <Product key={item.image} item={item} />;
    });
    return (
      <section className="section product-show">
        <div className="container">
          <div className="products-list">
            <ul>{productlist}</ul>
          </div>
          <button
            className="button  more-products"
            onClick={() => this.incrementItems()}>
            more products
          </button>
        </div>
      </section>
    );
  }
}

//exports react
export default ProductShow;
