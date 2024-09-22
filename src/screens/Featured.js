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
                        <img src="./images/1.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/2.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/3.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/4.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/5.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/6.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/7.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/8.png" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
            </Slider>
        </>
    );
}

export default Featured