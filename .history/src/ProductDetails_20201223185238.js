import React from "react";
import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (pos === 0) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const featureArr = [item.FeatureItem];
    if (pos === 0) featureArr.push(classes.SelectedFeatureItem);
    return (
      <button key={pos} className={featureArr.join(" ")}>
        {item}
      </button>
    );
  });

  return (
    <div>
      <div className={classes.ProductDetails}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        <p className={classes.ProductDesc}>{props.data.description}</p>

        <h3 className={classes.ProductHeading}>Select Band Color</h3>

        <div>{colorOptions}</div>

        <h3 className={classes.ProductHeading}>Features</h3>

        <div>
          {featureList}
          {/* <button
            className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
              " "
            )}
          >
            Time
          </button>
          <button className={classes.FeatureItem}>Heart Rate</button> */}
        </div>

        <button className={classes.PrimaryButtom}>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
