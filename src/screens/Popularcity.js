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
                        <img src="./webpImages/c1.webp" alt="" />
                    </div>
                    <h5>Delhi</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c2.webp" alt="" />
                    </div>
                    <h5>Gurugram</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c3.webp" alt="" />
                    </div>
                    <h5>Faridabad</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c4.webp" alt="" />
                    </div>
                    <h5>Noida</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c9.webp" alt="" />
                    </div>
                    <h5>Hyderabad</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c5.webp" alt="" />
                    </div>
                    <h5>Mumbai</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c6.webp" alt="" />
                    </div>
                    <h5>Pune</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c7.webp" alt="" />
                    </div>
                    <h5>Bengaluru</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c8.webp" alt="" />
                    </div>
                    <h5>Chennai</h5>
                </div>
                <div className='singleCities'>
                    <div className='imgBox'>
                        <img src="./webpImages/c10.webp" alt="" />
                    </div>
                    <h5>Kolkata</h5>
                </div>
            </Slider>
        </>
    );
}

export default Popularcity
