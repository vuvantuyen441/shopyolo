import React, {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';

import numberWithCommas from '../utils/numberWithCommas';

import {removeItem,updateItem} from '../redux/productViewSlice';



const CartItem = (props) => {
    
    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity) 

    useEffect(()=>{
        setItem(props.item)
        setQuantity(props.item.quantity)
    },[props.item])

    const updatePrve = () => {
        dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))     
    }
    const updateNext = () =>{
        dispatch(updateItem({...item, quantity: quantity + 1 }))
    }

    const handleDelete = () => {
        console.log('remove')
        dispatch(removeItem(item))
    }
    return (
           <div className="cartItem">
               <div className="cartItem__info">
                    <div className="cartItem__info__img">
                        <img src={item.image01} alt='' />
                    </div>
                    <div className="cartItem__info__title">
                       {item.title} - <span>{item.color} - {item.size}</span>
                    </div>
               </div>
               <div className="cartItem__option">
                    <div className="cartItem__option__price">
                        {numberWithCommas(item.price)} VND
                    </div>
                    <div className="cartItem__option__quantity">
                            <div className="cartItem__option__quantity__btn" onClick={updatePrve} >
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="cartItem__option__quantity__input">
                                {quantity}
                            </div>
                            <div className="cartItem__option__quantity__btn" onClick={updateNext}>
                                <i className="bx bx-plus"></i>
                            </div>
                    </div> 
                    <div className="cartItem__option__del" onClick={handleDelete}>
                         <i className='bx bx-trash'></i>
                    </div>       
                </div>         
        </div> 
    );
};

export default CartItem;