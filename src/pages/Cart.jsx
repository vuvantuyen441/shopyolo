import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import numberWithCommas from '../utils/numberWithCommas';

const Cart = () => {

    const items = useSelector(state => state.cartItems.items) 
    
    const [productItem, setproductitem] = useState(items)
    const [totalQuantity, setTotalQuantity ] = useState(0)
    const [totalprice, setTotalPrice] = useState(0)

    useEffect(()=>{
        setproductitem(items)
        setTotalQuantity(items.reduce((total,item) => total + Number(item.quantity),0))
        setTotalPrice(items.reduce((total,item) => total + (Number(item.price))*(Number(item.quantity)),0))
    },[items])

    // console.log(items)

    return (
        <div className='cart'>
            <div className="cart__left">
                <div className="cart__left__totalItem">
                    <p>Bạn đang có <span>{totalQuantity}</span> sản phẩm trong giỏ hàng.</p>
                </div>
                <div className="cart__left__totalprice">
                    <p>Thành tiền:</p>
                    <span>{numberWithCommas(totalprice)} VND</span>
                </div>
                <div className='cart__left__btn'>
                    <button>Đặt Hàng</button>
                    <button>Tiếp tục mua hàng</button>
                </div>
            </div>
            <div className="cart__right">
           { productItem.map((item,index) => (
                <CartItem key={index} item={item} />
            ))}
            </div>
        </div>
    );
};

export default Cart;