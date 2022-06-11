import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import SliderData from '../assets/fake-data/slider';
import Slider from '../components/Slider';
import Section,{SectionTitle,SectionBody} from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import policy from '../assets/fake-data/policy'
import ProductsCard from '../components/ProductsCard';
import productData from '../assets/fake-data/products';
import banner from '../assets/images/banner.png'

const Home = () => {

    return (
        <Helmet title = 'Trang chủ'>
            {/* {slider} */}
            <Slider data={SliderData} auto={false} timeOut={3000} />
            {/* policy section */}
            <Section>
               <SectionBody>
                   {policy.map((item,index)=>(
                       <Link  key={index} to ='/policy'>
                            <PolicyCard                               
                                name={item.name}
                                icon={item.icon}
                                description={item.description}
                            />                   
                       </Link>
                   ))
                   }
               </SectionBody>
            </Section>
            {/* best selling section */}
            <Section>
                <SectionTitle>
                    Top Sản Phẩm Bán Chạy Trong Tuần
                </SectionTitle>
                <SectionBody>
                   {
                       productData.getProducts(4).map((item)=>(
                            <ProductsCard
                                key={item.id}
                                data={item}       
                            />
                       ))
                   }        
                </SectionBody>
            </Section>
            {/* new arrival section */}
            <Section>
                <SectionTitle>sản phẩm mới</SectionTitle>
                <SectionBody>
                    {
                     productData.getProducts(8).map((item)=>(
                         <ProductsCard 
                            key={item.id}
                            data={item}
                         />
                     ))
                    }
                </SectionBody>
            </Section>
            {/* banner */}
            <Section>        
                <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>            
            </Section>
            {/* popular product section */}
            <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    {
                       productData.getProducts(12).map((item)=>(
                           <ProductsCard 
                                key={item.id}
                                data={item}
                           />
                       )) 
                    }
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Home;