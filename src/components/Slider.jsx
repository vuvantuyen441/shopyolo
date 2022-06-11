import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const Slider = props => {

    const data = props.data
    const [activeSlider, setActiveSlide] = useState(0);
    const timeOut = props.timeOut ? props.timeOut : 4000
   
    const prveSlider = () => {
            const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1         
            setActiveSlide(index )
        }
  
    const nextSlider = () => {
            const index =  activeSlider + 1 === data.length ? 0 : activeSlider + 1    
            setActiveSlide(index)
        }
        
    useEffect(()=>{
        if (props.auto){
            const sliderAuto = setInterval(()=>{
                nextSlider()
            },timeOut)
            return () => {
                clearInterval(sliderAuto)
            }
        }       
    },[nextSlider,timeOut,props])

    return (
        <div className='content'>
            {
                data.map((item,index) => (
                    <Slideritem key={index} item={item} active={index === activeSlider}/>
                ))             
            }
            <div className="content__control">
                <div className="content__control__item" onClick={prveSlider}>
                    <i className="bx bx-chevron-left"></i>
                </div>
                <div className="content__control__item" >
                    <div className="index">
                        {activeSlider +1}/{data.length}
                    </div>
                </div>
                <div className="content__control__item" onClick={nextSlider}>
                    <i className="bx bx-chevron-right"></i>
                </div>
            </div>
        </div>
    );
};

const Slideritem = props => (
    <div className={`content__item ${props.active ? 'active' : ''}`} >
        <div className="content__item__info">
            <div className={`content__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="content__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="content__item__info__btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon='bx bx-cart'        
                    >
                         xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>
        <div className="content__item__image">
            <img src={props.item.img} alt="" />
        </div>
    </div>
)


export default Slider;