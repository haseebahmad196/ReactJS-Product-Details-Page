import React from 'react';
import classes from './ProductPreview.module.css';
const ProductPreview=(props)=>{
    return( 
          
        <div className={classes.ProductPreview}>
  <img src={props.currentPreviewImage} alt="Product Preview" /> 
  <div className={classes.time}>
<p>{`${new Date().getHours()}: ${new Date().getMinutes()}`}</p>
  </div> 
  </div>
  
  );
}

export default ProductPreview;