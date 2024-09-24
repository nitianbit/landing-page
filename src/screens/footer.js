import React from 'react';
import './css/demo.css';
import './css/head.css';
import './css/fonts/style.css';
import './fonts/fonts.css';
import './style.css';


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footerTop">
                    <div className="container d-flex flex-between column">
                        <div className="footerLogo">
                            <a href="home" >
                                <img src="./images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="footerMenu">
                            <ul className=''>
                                <li><a href="Aboutus">About Us</a></li>
                                <li><a href="Forbuyers">For Buyers</a></li>
                                <li><a href="Forbuildersdealers">For Builders/Dealers</a></li>
                                <li><a href="Privacypolicy">Privacy Policy</a></li>
                                <li><a href="Contactus">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footerSocial">
                            <h5>FOLLOW</h5>
                            <ul className="d-flex">
                                <li>
                                    <a href="facebook.com">
                                        <span className="icon-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="instagram.com">
                                        <span className="icon-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="TopcityOffer">
                    <div className="container flex-between column">
                        <div className="Topcity full">
                            <h4>TOP CITIES</h4>
                            <div className="gp5 d-flex">
                                <ul className=''>
                                    <li>DELHI</li>
                                    <li>GURGAON</li>
                                    <li>FARIDABAD</li>
                                    <li>NOIDA</li>
                                    <li>HYDERABAD</li>
                                </ul>
                                <ul className=''>
                                    <li>MUMBAI</li>
                                    <li>PUNE</li>
                                    <li>BENGALURU</li>
                                    <li>CHENNAI</li>
                                    <li>KOLKATA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Offer full">
                            <h4>WHAT WE OFFER</h4>
                            <div className="d-flex gp5">
                                <ul className="">
                                    <li>RESIDENTIAL APARTMENTS</li>
                                    <li>RESIDENTIAL FLATS</li>
                                    <li>RESIDENTIAL BUILDER FLOORS</li>
                                    <li>RESIDENTIAL DUPLEX</li>
                                </ul>
                                <ul className=''>
                                    <li>RESIDENTIAL PLOTS</li>
                                    <li>COMMERCIAL OFFICES</li>
                                    <li>COMMERCIAL SHOPS</li>
                                    <li>RESIDENTIAL VILLAS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerbottom">
                    <p className="text-center text-white">
                        Copyright @apkiproperty.com. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;