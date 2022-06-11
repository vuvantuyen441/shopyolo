import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/Logo-2.png'


const mainNav = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    },
]

const Header = () => {

    const {pathname} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    const menuAltRef = useRef(null)
   

    useEffect(()=>{

        const shrinkHeader =  () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('shrink')
            }else{
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    },[])
    
    const menuToggle = () => {
        menuAltRef.current.classList.toggle('active')
    }

    return (
        <div className='header' ref={headerRef} >
            <div className="header__menuAlt"  onClick={menuToggle}>
                    <i className='bx bx-menu-alt-left'></i>
            </div>
            <div className="header__menu" ref={menuAltRef} >   
                <div className="header__menu__chevron"  onClick={menuToggle}>
                     <i className='bx bx-chevron-left'></i>
                </div>
                {mainNav.map((item,index)=>(
                    <div 
                        key={index}
                        className={`header__menu__item ${index === activeNav ? 'active'   : ''}`}
                        onClick={menuToggle}
                    >
                        <Link to={item.path}>
                                <span>{item.display}</span>
                        </Link>
                    </div>    
                ))}
            </div>          
            <div className="header__logo">
                    <img src={logo} alt = ""/>
            </div>     
            <div className="header__icon">
                <div className='header__icon__search'>
                        <i className="bx bx-search"></i>
                </div>
                <div className="header__icon__cart">
                       <Link to='/cart'> 
                             <i className="bx bx-shopping-bag"></i>
                       </Link>
                </div>
                <div className="header__icon__user">
                    <i className="bx bx-user"></i>
                </div>
            </div>      
        </div>
    );
};

export default Header;