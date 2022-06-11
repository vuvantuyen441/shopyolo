import React from 'react';

import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';
import { Link } from 'react-router-dom';

const ProductsCard = (props) => {
    const data= props.data
    return (
        <div className="productsCard">
            <Link to={`/catalog/${data.slug}`}>
                <div className="productsCard__item">
                    <div className="productsCard__item__image">               
                        <img src={data.image01} alt='' />                     
                        <img src={data.image02} alt='' />               
                    </div>   
                    <div className="productsCard__item__title">
                        {data.title}
                    </div>           
                    <div className="productsCard__item__price">
                        {numberWithCommas(data.price)}
                        <span>399000</span>
                    </div>       
                </div>        
            </Link>
            <Link to={`/catalog/${data.slug}`}>
                <div className="productsCard__btn">
                    <Button
                        icon='bx bx-cart'
                        size='sm'
                    >
                        Chọn mua
                    </Button>
                </div>    
            </Link>
        </div>       
    );
};

export default ProductsCard;