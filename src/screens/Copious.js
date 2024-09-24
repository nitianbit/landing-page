import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Copious = () => {
    const [imgshow, setImgshow] = useState(false);
    const [url, setUrl] = useState(null);
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
                    <img src="./images/1.jpg" alt="" onClick={() => { setImgshow(!imgshow); setUrl("./images/1.jpg");}}/>
                </div>
                <div className='imgBox'>
                    <img src="./images/2.jpg" alt="" onClick={() => { setImgshow(!imgshow); setUrl("./images/2.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/3.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/3.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/4.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/4.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/5.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/5.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/6.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/6.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/7.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/7.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/8.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/8.jpg");}} />
                </div>
                <div className='imgBox'>
                    <img src="./images/1.jpg" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./images/9.jpg");}} />
                </div>
            </Slider>
            <div className={imgshow ? "imgshow active" : "imgshow"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setImgshow(!imgshow);}}></span>
                    <img src={url} alt="" id='ShowImg'/>
                </div>
            </div>
        </>
    );
}

export default Copious