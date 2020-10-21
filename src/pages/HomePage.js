//import react
import React from "react";

//import components
import Hero from "../components/Hero";
import ProductShow from "../components/ProductShow";

//create react
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <ProductShow items={this.props.items} />
      </>
    );
  }
}

//exports react
export default HomePage;
