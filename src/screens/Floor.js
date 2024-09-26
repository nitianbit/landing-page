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
                <img src="./images/p1.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p1.jpg");}} />
                <img src="./images/p2.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p2.jpg");}} />
                <img src="./images/p3.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p3.jpg");}} />
                <img src="./images/p4.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p4.jpg");}} />
                <img src="./images/p5.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p5.jpg");}} />
                <img src="./images/p6.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p6.jpg");}} />
                <img src="./images/p7.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p7.jpg");}} />
                <img src="./images/p8.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p8.jpg");}} />
                <img src="./images/p9.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p9.jpg");}} />
                <img src="./images/p10.jpg" alt="" className='plnimg' onClick={() => { setImgshow(!imgshow); setUrl("./images/p10.jpg");}} />
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