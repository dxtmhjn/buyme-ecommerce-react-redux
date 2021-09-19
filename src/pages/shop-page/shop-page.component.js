import React, { Component } from 'react';
import './shop-page.styles.scss';
import productsData from './shop-products-data';
import ProductCollection from '../../components/product-collection/product-collection.component';

class ShopPage extends Component{
constructor()
{
    super();
    this.state={
        products:productsData
    }
}

render(){
    return(
          <div className="shop-page">
              {
                  this.state.products.map(({id,...restKeys})=>(
                    <ProductCollection key={id} {...restKeys}/>
                  ))
              }
             
             
          </div>
    );
}
}

export default ShopPage;