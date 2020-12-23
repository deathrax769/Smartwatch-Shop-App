import React, { Component } from "react";
import classes from "./App.module.css";
import "./ProductData.js";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview />
          </div>
          <ProductDetails />
        </div>
      </div>
    );
  }
}

export default App;
