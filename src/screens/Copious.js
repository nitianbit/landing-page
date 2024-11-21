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
        <div style={{
            marginBottom:"16px"
        }}>
            <Slider {...settings} className=''>
                <div className='imgBox'>
                    <img src="./webpImages/1.webp" alt="" onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/1.webp");}}/>
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/2.webp" alt="" onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/2.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/3.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/3.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/4.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/4.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/5.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/5.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/6.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/6.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/7.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/7.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/8.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/8.webp");}} />
                </div>
                <div className='imgBox'>
                    <img src="./webpImages/1.webp" alt="" onClick={() => { setImgshow(!imgshow);  setUrl("./webpImages/9.webp");}} />
                </div>
            </Slider>
            <div className={imgshow ? "imgshow active" : "imgshow"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setImgshow(!imgshow);}}></span>
                    <img src={url} alt="" id='ShowImg'/>
                </div>
            </div>
        </div>
    );
}

export default Copious
