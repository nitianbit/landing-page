import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Floor = () => {
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
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings} className=''>
                <img src="./images/p1.png" alt="" />
                <img src="./images/p2.png" alt="" />
                <img src="./images/p3.png" alt="" />
                <img src="./images/p4.png" alt="" />
                <img src="./images/p5.png" alt="" />
                <img src="./images/p6.png" alt="" />
                <img src="./images/p7.png" alt="" />
                <img src="./images/p8.png" alt="" />
                <img src="./images/p9.png" alt="" />
                <img src="./images/p10.png" alt="" />
            </Slider>
        </>
    );
}

export default Floor