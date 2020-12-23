import React from 'react';

import classes from './src/Styles/ProductPreview.module.css';

const ProductPreview= (props) => {
  return (
    <div className={classes.ProductPreview}>
      <img src="https://imgur.com/iOeUBV7.png" alt="watch img"/>
          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinutes}`}</p>
          </div> */}
          <div className={classes.HeartBeatSection}>
            <i class="fa fa-heartbeat" aria-hidden="true"></i>  
            <p>78</p>
          </div>
    </div>
  );
}

export default ProductPreview;

