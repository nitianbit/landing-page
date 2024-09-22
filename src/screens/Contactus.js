import React from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';


const Contactus = () => {
    return (
        <>
            <Header />
            {/* banner section start */}
            <div className='contactUs'>
                <div className='d-flex bgs smd '>
                    <div className='lll full'>
                    </div>
                    <div className='rrr full'>
                    </div>
                </div>
                <div className='container d-flex align-center column'>
                    <div className='left full'>
                        <h1>Contact Us</h1>
                        <p>If you would like to know more details, feel
                            free to contact us. Our site representative will
                            give you a call back.
                        </p>
                        <h3>Address</h3>
                        <p>Apki Property
                            Dwarka Sector 7
                            New Delhi - 110075
                            India</p>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday</p>
                        <p>10:00 AM - 06:00 PM</p>
                    </div>
                    <div className='right'>
                        <form action="" method="post">
                            <h4>Have Any Question?</h4>
                            <input type="text" name="" id="" placeholder="Full Name"></input>
                            <input type="email" name="" id="" placeholder="Email ID"></input>
                            <input type="tel" name="" id="" placeholder="Mobile Number"></input>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Got something more to say'></textarea>
                            <input type="submit" name="" value="Schedule a Call" className='button'></input>
                        </form>
                    </div>
                </div>
            </div>
            {/* banner section end */}
            <Footer />
        </>
    )
}
export default Contactus;