import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Newly = () => {
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
                    slidesToShow: 1,
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
                        <img src="./images/f1.png" alt="" />
                    </div>
                    <h5>Universal Square</h5>
                    <h6>Sector 79, Faridabad</h6>
                    <p>Commercial</p>
                    <h4>Starting ₹79 Lakh*</h4>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/f2.png" alt="" />
                    </div>
                    <h5>Universal Square</h5>
                    <h6>Sector 79, Faridabad</h6>
                    <p>Commercial</p>
                    <h4>Starting ₹79 Lakh*</h4>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/f3.png" alt="" />
                    </div>
                    <h5>Universal Square</h5>
                    <h6>Sector 79, Faridabad</h6>
                    <p>Commercial</p>
                    <h4>Starting ₹79 Lakh*</h4>
                </div>
                <div className='singleProperties'>
                    <div className='imgBox'>
                        <img src="./images/f4.png" alt="" />
                    </div>
                    <h5>Universal Square</h5>
                    <h6>Sector 79, Faridabad</h6>
                    <p>Commercial</p>
                    <h4>Starting ₹79 Lakh*</h4>
                </div>
            </Slider>
        </>
    );
}

export default Newly