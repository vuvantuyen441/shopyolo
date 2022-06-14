import React, { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';

import numberWithCommas from '../utils/numberWithCommas';
import {addItem} from '../redux/productViewSlice'; 
// chu y import 
import productData from '../assets/fake-data/products';
import ProductsCard from '../components/ProductsCard';
import Section,{SectionTitle,SectionBody} from '../components/Section';

const ProductView = (props) => {
   
    const data = props.data
    const dispatch = useDispatch()

    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1); 
    const [showImg, setShowImg] = useState(data.image01)
    const [expand, setExpand] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    console.log(data.image01)
    useEffect(()=>{
        setShowImg(data.image01)
    },[data])

    const check = () => {
        if(color === undefined){
            alert('Vui lòng chọn màu sắc!')
            return false
        }
        if(size === undefined){
            alert('Vui lòng chọn kích cỡ!')
            return false
        }
        return true
    }

    const addToCart = () => {
        if(check()){
            let newItem={  
                image01: showImg,
                title: data.title,
                price: data.price,
                color: color,
                size: size,
                quantity:quantity
            }
            if(dispatch(addItem(newItem))){
                alert('Success')
            }else{
                alert('fail')
            }                   
        }        
    }
    const goToCart = () => {
        if(check()){
            let newItem={
                image01: showImg,       
                title: data.title,
                price: data.price,
                color: color,
                size: size,
                quantity:quantity
            }
            if(dispatch(addItem(newItem))){
                alert('Success')
            }else{
                alert('fail')
            }                   
        }        
    }
   
    return (
        <>  
        <div className='productview'>
            <div className="productview__image">
                <div className="productview__image__list">
                    <div className="productview__image__list__img">
                        <div className="productview__image__list__img_01" onClick={() => setShowImg(data.image01)}>
                            <img src={data.image01} alt='' />
                        </div>
                        <div className="productview__image__list__img__02" onClick={() => setShowImg(data.image02)} >
                                <img src={data.image02} alt='' />
                        </div>                 
                    </div>
                    <div className="productview__image__list__img01">
                        <img src={showImg} alt='' />                 
                    </div>  
                </div>           
            </div>
            
            <div className="productview__properties">
                <div className="productview__properties__title">
                   {data.title}
                </div>
                <div className="productview__properties__price">
                    {numberWithCommas(data.price)} VND
                </div>
                <div className="productview__properties__colors">
                    <p>Màu Sắc</p>
                    <div className = 'productview__properties__colors__list'   >
                        {data.colors.map((item,index)=>(
                            <div key={index}  className={`circle bg-${item} ${item === color ? 'active' : ''}`} onClick={()=>setColor(item)}></div>                   
                        ))}
                    </div>
                </div>
                <div className="productview__properties__size">
                    <p>Kích Cỡ</p>
                    <div className="productview__properties__size__list">
                        {data.size.map((item,index)=>(
                            <div key={index} className={`circle ${item === size ? 'active' : ''}`} onClick={() => setSize(item)}>{item}</div>
                        ))} 
                    </div>
                </div>
                <div className="productview__properties__option">
                    <p>Số lượng</p>
                    <div className="productview__properties__option__quantity">
                        <div className="productview__properties__option__quantity__btn" onClick={() => setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="productview__properties__option__quantity__input">
                            {quantity}
                        </div>
                        <div className="productview__properties__option__quantity__btn" onClick={() => setQuantity(quantity + 1)}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div> 
                </div>
                <div className="productview__properties__btn">
                    <button onClick={addToCart} >thêm vào giỏ</button>
                    <button onClick={goToCart}>mua ngay</button>
                </div>
            </div>                
        </div>
        <div className="description">
            <div className="description__title">
                Chi Tiết Sản Phẩm
            </div> 
            <div className={`description__content ${expand ? 'expand' : ''}`}dangerouslySetInnerHTML={{__html: data.description}} ></div>  
            <div className='description__btn'  onClick={()=>setExpand(!expand)} >
                <button>{expand ? 'Thu gọn' : 'Xem thêm'}</button>
            </div>        
        </div> 
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
    </>
    );
};

export default ProductView;