import React from 'react';
import classes from './App.module.css';
import './ProductData.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav className={classes.topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="amazon"/>
        </nav>
      </header>

      <div className={classes.mainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="watch img"/>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>FitBit 19 - The Smartest Watch</h1>
          <p className={classes.ProductDesc}>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>

          <h3>Select band color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="band color"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt=""/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt=""/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
