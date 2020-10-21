//import react
import React from "react";
//import Route
import { BrowserRouter, Route } from "react-router-dom";

//import pages
import HomePage from "./pages/HomePage";
import DetilsPage from "./pages/DetilsPage";
import CartPage from "./pages/CartPage";

//import components
import Header from "./components/Header";
import MailingList from "./components/MailingList";
import ProductShow from "./components/ProductShow";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

//import data file
import data from "./data/store-items.json";

//create react
class App extends React.Component {
  state = {
    items: data,
    order: "",
    orders: [],
  };
//send product from detils page to cart page
  catchItem = (item) => {
    this.setState({ order: item });
    let newOrders = this.state.orders;
    newOrders.push(item);
    this.setState({ orders: newOrders });
  };
  //remove all product from cart 
  removeItem = (item) => {
    let removeOrders = this.state.orders;
    removeOrders.splice(item);
    this.setState({ orders: removeOrders });
    console.log(removeOrders, "removeorder");
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <>
          <Route
            exact
            path="/"
            render={(props) => {
              return <HomePage {...props} items={this.state.items} />;
            }}
          />

          <Route
            exact
            path="/collection"
            render={(props) => {
              return <ProductShow {...props} items={this.state.items} />;
            }}
          />

          <Route
            exact
            path="/contact"
            render={(props) => {
              return <Contact {...props} />;
            }}
          />

          <Route
            exact
            path="/detils/:id"
            render={(props) => {
              return (
                <DetilsPage
                  {...props}
                  items={this.state.items}
                  catchItem={this.catchItem}
                />
              );
            }}
          />

          <Route
            exact
            path="/cart"
            render={(props) => {
              return (
                <CartPage
                  {...props}
                  items={this.state.items}
                  catchItem={this.catchItem}
                  order={this.state.order}
                  orders={this.state.orders}
                  removeItem={this.removeItem}
                />
              );
            }}
          />
        </>
        <MailingList />
        <Footer />
      </BrowserRouter>
    );
  }
}

//exports react
export default App;
