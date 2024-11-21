import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Floor = () => {
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
                <img src="./webpImages/p1.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p1.webp");}} />
                <img src="./webpImages/p2.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p2.webp");}} />
                <img src="./webpImages/p3.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p3.webp");}} />
                <img src="./webpImages/p4.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p4.webp");}} />
                <img src="./webpImages/p5.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p5.webp");}} />
                <img src="./webpImages/p6.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p6.webp");}} />
                <img src="./webpImages/p7.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p7.webp");}} />
                <img src="./webpImages/p8.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p8.webp");}} />
                <img src="./webpImages/p9.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p9.webp");}} />
                <img src="./webpImages/p10.webp" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./webpImages/p10.webp");}} />
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

export default Floor