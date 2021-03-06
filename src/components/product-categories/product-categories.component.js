import React, { Component } from "react";
import './product-categories.styles.scss';
import CategoryBox from "../category-box/category-box.component";


class ProductCategories extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shoes'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
              }
            ]
          };
    }

    render() {

        return (
            <div className="product-categories">
                {
                    this.state.sections.map(({id, ...restKeys})=>(
                        <CategoryBox key={id} {...restKeys} />
                    ))
                }
               
            </div>
        );
    }
}

export default ProductCategories;