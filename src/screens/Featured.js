import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Featured = () => {
    var settings = {
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    infinite: true,
                    speed: 500,
                    initialSlide: 0,
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
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/1.webp" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/2.webp" alt="" />
                    </div>
                    <h5>Residential Flats</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/3.webp" alt="" />
                    </div>
                    <h5>Residential Builder Floors</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/4.webp" alt="" />
                    </div>
                    <h5>Residential Duplex</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/5.webp" alt="" />
                    </div>
                    <h5>Residential Villas</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/6.webp" alt="" />
                    </div>
                    <h5>Residential Plots</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/7.webp" alt="" />
                    </div>
                    <h5>Commercial Offices</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./webpImages/8.webp" alt="" />
                    </div>
                    <h5>Commercial Shops</h5>
                </div>
            </Slider>
        </>
    );
}

export default Featured
