import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Popularcity = () => {
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
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c1.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c2.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c3.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c4.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c5.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c6.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c7.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c8.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c1.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./images/c2.jpg" alt="" />
                    </div>
                    <h5>Residential Apartments</h5>
                </div>
            </Slider>
        </>
    );
}

export default Popularcity