import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Copious = () => {
    var settings = {
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    initialSlide: 0,
                    arrow: false,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings} className=''>
                <div className='imgBox'>
                    <img src="./images/1.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/2.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/3.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/4.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/5.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/6.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/7.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/8.png" alt="" />
                </div>
                <div className='imgBox'>
                    <img src="./images/1.png" alt="" />
                </div>
            </Slider>
        </>
    );
}

export default Copious