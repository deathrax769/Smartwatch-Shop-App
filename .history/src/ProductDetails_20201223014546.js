import React from 'react';
import classes from '../PRoductDetails.module.css';

function ProductDetails(props) {
  return (
    <div>
      <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>FitBit 19 - The Smartest Watch</h1>
          <p className={classes.ProductDesc}>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>

          <h3 className={classes.ProductHeading}>Select Band Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="band color"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt=""/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt=""/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt=""/>
          </div>

          <h3 className={classes.ProductHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButtom}>Buy Now</button>
        </div>
    </div>
  );
}

export default ProductDetails;