import React from 'react';
import { useParams } from 'react-router-dom';

import ProductView from '../components/ProductView';
import productData from '../assets/fake-data/products';
import Section from '../components/Section';


const Product = () => {
    const {slug} = useParams();
    const productdetail = productData.getProductBySlug(slug);
    
    return (
        <div className='product'>
            <Section>             
                 <ProductView data={productdetail}/>             
            </Section>           
        </div>
    );
};

export default Product;