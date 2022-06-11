import React, { useEffect, useRef, useState } from 'react';

import Helmet from '../components/Helmet';
import category from '../assets/fake-data/category';
import colors from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';
import CheckBox from '../components/CheckBox';
import Section from '../components/Section';
import productData from '../assets/fake-data/products';
import ProductsCard from '../components/ProductsCard';

const Catalog = () => {

    const productList = productData.getAllProducts()
    const [name, setName] = useState([])
    const [color, setColor] = useState([])
    const [sizes, setSizes] = useState([])

    const searchRef = useRef(null)

    const [products,setProducts] = useState(productList)

    const handleName = (item) => {
        setName (prve=>{
            const isChecked = name.includes(item.categorySlug)
            if(isChecked){
                const newName = name.filter(e=>e !== item.categorySlug)
                return newName
            }else{
                return [...prve,item.categorySlug]
            }
        })  
        } 
      
        const handleColor = (item) => {
            setColor (prve=>{
                const isChecked = color.includes(item.color)
                if(isChecked){
                    const newColor = color.filter(e=>e !== item.color)
                    return newColor
                }else{
                    return [...prve,item.color]
                }
            })  
        }  
      
        const handleSize = (item) => {
            setSizes(prve => {
                const ischecked = sizes.includes(item.size)
                if(ischecked){
                    const newSize = sizes.filter(e=> e !== item.size)
                    return newSize
                }else{
                    return [...prve,item.size]
                }
            })
        }    
             
        useEffect(()=>{    
            let newProduct = productList          
            if(name.length > 0 ){
                newProduct = newProduct.filter(e => name.includes(e.categorySlug) )
            }
            if(color.length > 0){
                newProduct = newProduct.filter(item =>{
                    const check = item.colors.find( c => color.includes(c) )
                    return check !== undefined
                })
            }
            if(sizes.length > 0){
                newProduct = newProduct.filter(item => {
                    const check = item.size.find(size => sizes.includes(size))
                    return check !== undefined
                })
            }
            setProducts(newProduct)
        },[color,sizes,name,productList])

        const handleDelete = () => {
            setName([]);
            setColor([]);
            setSizes([]);
        }

        const toggleSearch = () => {
            searchRef.current.classList.toggle('active')
        }

    return (
        <Helmet title = 'Sản Phẩm'>
            <Section>
                <div className="row">  
                        <div className="catalog col-2" >
                            <div className="catalog__filter" ref={searchRef}>
                            <div className="header__menu__chevron" onClick = {toggleSearch}>
                                <i className='bx bx-chevron-left'></i>
                            </div>
                                <div className="catalog__filter__title">
                                    Danh mục sản phẩm
                                </div>
                                <div className="catalog__filter__checkbox">
                                    {
                                        category.map((item,index)=>(
                                            <CheckBox 
                                                key={index}
                                                label={item.display}     
                                                checked={name.includes(item.categorySlug)}                                                                                 
                                                onChange={()=>handleName(item)}
                                            />
                                        ))
                                    }
                                </div>
                                <div className="catalog__filter__title">
                                    màu sắc
                                </div>
                                <div className="catalog__filter__checkbox">
                                    {
                                        colors.map((item,index)=>(
                                            <CheckBox 
                                                key={index}                                             
                                                label={item.display}
                                                checked={color.includes(item.color)}
                                                onChange={()=>handleColor(item)}
                                            />
                                        ))
                                    }
                                </div>
                                <div className="catalog__filter__title">
                                    kích cỡ
                                </div>
                                <div className="catalog__filter__checkbox">
                                    {
                                        size.map((item,index)=>(
                                            <CheckBox 
                                                key={index}
                                                label={item.display}
                                                checked={sizes.includes(item.size)} //checked mac dinh true
                                                onChange={()=>handleSize(item)}
                                            />
                                        ))
                                    }
                                </div>
                                <div className="catalog__filter__btn">
                                    <button onClick={handleDelete}> Xóa Bộ Lọc</button>
                                </div>                     
                            </div>                                              
                        </div>
                    
                        <div className="catalog col-10">
                            <div className="catalog__btn hide " >
                                <button onClick = {toggleSearch}>Bộ Lọc</button>
                            </div>   
                            <div className="catalog__products">
                                {
                                    products.map((item)=>(
                                        <ProductsCard 
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>                       
            </Section>
        </Helmet>
    );
};

export default Catalog;