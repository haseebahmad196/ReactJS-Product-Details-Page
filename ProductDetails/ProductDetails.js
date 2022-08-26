import React from 'react';
import classes from './ProductDetails.module.css'; 
const ProductDetails=(props)=> {
  const colorOptions= props.data.colorOptions.map(( item,pos) => {
    return (  
      <img key= {pos} className={classes.imgDes} src={item.imageUrl} alt={item.styleName} onClick={()=> props.oncolorOptionsClick(pos)} />


      );
    
  })

    return( 
        <div className={classes.ProductData}>  
 <h1 className={classes.ProductTitle}>{props.data.title}</h1> 
<p className={classes.Productdescription}> {props.data.description}</p>
<h3 className={classes.colors}>Select color</h3>
{ <div>  
  {colorOptions}
{/* <img className={[classes.imgDes, classes.SelectedimgDes].join(' ') 
} src="https://i.imgur.com/iOeUBV7.png" alt="BlackStriped" />
<img className={classes.imgDes} src="https://i.imgur.com/PTgQlim.png" alt="OrangeStriped" />
<img className={classes.imgDes} src="https://i.imgur.com/Mplj1YR.png" alt="PurpleStriped" />
<img className={classes.imgDes} src="https://i.imgur.com/xSIK4M8.png" alt="GreyStriped" /> */}
</div>    }


<h3 className={classes.colors}>Features</h3>
<div>  
  <button className={classes.btn}>Time</button>
  <button className={[classes.btn, classes.Selectedbtn].join(' ')}>Heart Rate</button>
</div> 
  
<button className={classes.primarybtn}>Buy Now</button>
  </div> 
  
 



    
        );
    }
         
export default ProductDetails;