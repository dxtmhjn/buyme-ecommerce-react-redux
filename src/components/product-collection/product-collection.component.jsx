import React from "react";
import './product-collection.styles.scss';
import ProductCard from "../product-card/product-card.component";


const ProductCollection=({title, items})=>(
    <div className="cat-box">
    <div className="cat-name">{title}</div>
    <div className="products-row">
        {items.filter((item,index)=>index<5).map(item=>(
         <ProductCard key={item.id} item={item}/>
        ))}
 
    </div>
</div>
);

export default ProductCollection;