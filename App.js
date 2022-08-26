import React, {Component} from 'react' 
import classes from './BlogCard.module.css'
import Topbar from './Topbar/Topbar';
import ProductData from './Topbar/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails'; 




class App extends Component { 

  state = {
    productData :ProductData,
    currentPreviewImage :'https://i.imgur.com/iOeUBV7.png',
  } 

  oncolorOptionsClick =(pos) => { 
    const updatedPreviewImage=this.state.productData.colorOptions[pos]. imageUrl
    console.log(updatedPreviewImage)
    this.setState({currentPreviewImage:updatedPreviewImage});
    
  }
  render(){ 
    return ( 
      <div className='App'> 
      <Topbar/> 
      <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
        <ProductPreview currentPreviewImage={this.state.currentPreviewImage}  />
      
      
      </div>  
      
      <div className={classes.ProductDetails}>  
      <ProductDetails data= {this.state.productData} oncolorOptionsClick=  {this.oncolorOptionsClick}/>
      
      </div>
      
        </div> 
      </div> 
      
      
      
        );
      }

  } 
  
  


export default App;