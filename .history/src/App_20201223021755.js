import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./ProductData.js";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import Header from "./Header";

class App extends Component {
  state = {
    productData: ProductData,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview />
          </div>
          <ProductDetails data={this.state.productData} />
        </div>
      </div>
    );
  }
}

export default App;
