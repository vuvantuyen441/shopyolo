import React from 'react';

import logo from '../assets/images/Logo-2.png';

const footerAboutLink = [
    {
        display: 'Giới thiệu',
        path: '/about'
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__support">
                <div className="footer__support__title">
                    Tổng đài hỗ trợ
                </div>
                <div className="footer__support__content">
                    <p>
                        Liên hệ đặt hàng <strong>0123456789</strong>
                    </p>
                    <p>
                        Thắc mắc đơn hàng <strong>0123456789</strong>
                    </p>
                    <p>
                        Góp ý, khiếu nại <strong>0123456789</strong>
                    </p>
                </div>
            </div>
            <div className="footer__about">
                <div className="footer__about__title">
                    Về Yolo
                </div>
                <div className="footer__about__content">                  
                        {  
                           footerAboutLink.map((item,index)=> (
                               <p key={index}>{item.display}</p>
                           ))                
                        }                  
                </div>
            </div>
            <div className="footer__customer">
                <div className="footer__customer__title">
                    Chăm sóc khách hàng
                </div>
                <div className="footer__customer__content">
                    {
                        footerCustomerLinks.map((item,index)=> (
                            <p key={index}>{item.display}</p>
                        ))
                    }
                </div>
            </div>
            <div className="footer__logo">
                <img src={logo} alt="" />
                <p>Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.</p>
            </div>           
        </div>
    );
};

export default Footer;