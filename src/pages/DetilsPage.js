//import react
import React from "react";

//import components
import Detils from "../components/Details";

//create react
class DetilsPage extends React.Component {
  render() {
    return (
      <>
        <Detils items={this.props.items} catchItem={this.props.catchItem} />
      </>
    );
  }
}

//exports react
export default DetilsPage;
