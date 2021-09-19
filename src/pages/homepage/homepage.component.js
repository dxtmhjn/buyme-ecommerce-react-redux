import React, { Component } from 'react';
import ProductCategories from '../../components/product-categories/product-categories.component';


class HomePage extends Component {
    render() {
        return (
            
                <div className="page-content">
                    <div className="banner">
                        <div className="jumbotron jumbotron-bg text-center rounded-0 page-banner">
                        </div>
                    </div>
            <ProductCategories/>
                </div>

            
        );
    }
}

export default HomePage;