import React from "react";
import { withRouter } from "react-router-dom";
import './category-box.styles.scss';

const CategoryBox = ({title, size, imageUrl, history, match, linkUrl}) => {

    return (
   
        <div className={`${size} category-box`} style={{backgroundImage:`url(${imageUrl})`}} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <div className="cat-name">{title}</div>
                <div className="shop-link">Shop Now</div>
            </div>
        </div>
    );
}

export default withRouter(CategoryBox);