import React from 'react';
import './css/demo.css';
import './style.css';
import './css/fonts/style.css';
import Header from './header';
import Footer from './footer';
import Featured from './Featured';

const About = () => {
    return (
        <>
            {/* ABOUT US */}
            <div className='aboutUs'>
                <div className='container'>
                    <h1 className='abt'>ABOUT US</h1>
                    <p>Welcome to Apki Property, your trusted partner in finding the perfect property in India. With a deep understanding of the real
                        estate market and a commitment to delivering exceptional service, we are here to guide you through every step of your property
                        buying journey. Whether you are looking for your dream home, a lucrative investment, or a commercial space, we offer tailored
                        solutions to meet your specific needs.
                    </p>
                    <p>At Apki Property, we believe in connecting buyers with the best opportunities in the market. Our expert team is dedicated to
                        helping you find properties that align with your goals, lifestyle, and budget. With access to a wide network of developers, agents,
                        and exclusive listings, we ensure that you have the advantage when it comes to making informed decisions.
                    </p>
                    <h1 style={{
                        marginTop: "35px"
                    }} className='abt'>WHY CHOOSE US?</h1>
                    <p>Whether you're a first-time homebuyer, a seasoned investor, or looking for a commercial property, Apki Property is here
                        to make your property buying journey smooth and successful. Let us help you turn your property dreams into reality!
                    </p>
                    <ul>
                        <li><b>Tailored Solutions:</b> We understand that every buyer is unique, and so are their needs. That’s why we take the time to listen,
                            analyze, and present options that match your vision.
                        </li>
                        <li><b>Expert Guidance:</b> Our experienced team of real estate professionals will walk you through the entire process, from property
                            search to final purchase, ensuring you have a seamless and stress-free experience.
                        </li>
                        <li><b>Market Insight:</b> With our finger on the pulse of the Indian real estate market, we provide you with the latest information and
                            trends, helping you make informed decisions.

                        </li>
                        <li><b>Transparent Transactions:</b> We prioritise trust and transparency in every transaction, ensuring you have complete confidence
                            in your property purchase.</li>
                    </ul>

                </div>
            </div>
            {/* featuredProperties start */}
                <div className='featuredProperties' style={{
                paddingBottom:"50px",
                paddingTop:"35px"
            }}>
                <div className='container'>
                    {/* <h4 className='text-center subtitle'>WHAT WE OFFER</h4> */}
                    <h1 className='text-start title'>What We Offer?</h1>
                    <div className='properties'>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/1.webp" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/2.webp" alt="" />
                            </div>
                            <h5>Residential Flats</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/3.webp" alt="" />
                            </div>
                            <h5>Residential Builder Floors</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/4.webp" alt="" />
                            </div>
                            <h5>Residential Duplex</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/5.webp" alt="" />
                            </div>
                            <h5>Residential Villas </h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/6.webp" alt="" />
                            </div>
                            <h5>Residential Plots</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/7.webp" alt="" />
                            </div>
                            <h5>Commercial Offices</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./webpImages/8.webp" alt="" />
                            </div>
                            <h5>Commercial Shops</h5>
                        </div>
                    </div>
                    <Featured />
                </div>
            </div>
            {/* featuredProperties end */}
        </>
    )
}
export default About;
