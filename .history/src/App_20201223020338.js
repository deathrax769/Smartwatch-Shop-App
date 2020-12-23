import React from 'react';
import classes from './App.module.css';
import './ProductData.js'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Header from './Header';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Header/>
        {/* <nav className={classes.topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="amazon"/>
        </nav> */}
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview />
        </div>
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;
