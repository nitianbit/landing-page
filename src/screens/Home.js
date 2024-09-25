import React from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import Featured from './Featured';
import Popularcity from './Popularcity';
const Home = () => {
    return (
        <>
            <Header />
            {/* banner section start */}
            <div className='banner'>
                {/* <div className='container'>
                    <h1 className='text-center'>THINKING OF BUYING YOUR <br></br> HOME OR OFFICE?</h1>
                    <h4 className='text-center'>
                        <span> GET THE CARE AND GUIDANCE YOU DESERVE</span>
                    </h4>
                    <p className='text-center'>
                        <a href="Contactus" className='button'>Contact Us</a>
                    </p>
                </div> */}
            </div>
            {/* banner section end */}
            {/* featuredProperties start */}
            <div className='featuredProperties' style={{
                paddingBottom:"0px"
            }}>
                <div className='container'>
                    {/* <h4 className='text-center subtitle'>WHAT WE OFFER</h4> */}
                    <h1 className='text-start title'>Featured Properties</h1>
                    <div className='properties'>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/1.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/2.jpg" alt="" />
                            </div>
                            <h5>Residential Flats</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/3.jpg" alt="" />
                            </div>
                            <h5>Residential Builder Floors</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/4.jpg" alt="" />
                            </div>
                            <h5>Residential Duplex</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/5.jpg" alt="" />
                            </div>
                            <h5>Residential Villas </h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/6.jpg" alt="" />
                            </div>
                            <h5>Residential Plots</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/7.jpg" alt="" />
                            </div>
                            <h5>Commercial Offices</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/8.jpg" alt="" />
                            </div>
                            <h5>Commercial Shops</h5>
                        </div>
                    </div>
                    <Featured />
                </div>
            </div>
            {/* featuredProperties end */}
            {/* Popular Cities start */}
            <div className='popularCities' style={{
                paddingBottom:"0px",
                paddingTop:"40px"
            }}>
                <div className='container'>
                    <h1 className='text-start title'>Popular Cities</h1>
                    <div className='cities'>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c1.jpg" alt="" />
                            </div>
                            <h5>Delhi</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c2.jpg" alt="" />
                            </div>
                            <h5>Gurugram</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c3.jpg" alt="" />
                            </div>
                            <h5>Faridabad</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c4.jpg" alt="" />
                            </div>
                            <h5>Noida</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c9.jpg" alt="" />
                            </div>
                            <h5>Hyderabad</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c5.jpg" alt="" />
                            </div>
                            <h5>Mumbai</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c6.jpg" alt="" />
                            </div>
                            <h5>Pune</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c7.jpg" alt="" />
                            </div>
                            <h5>Bengaluru</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c8.jpg" alt="" />
                            </div>
                            <h5>Chennai</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c10.jpg" alt="" />
                            </div>
                            <h5>Kolkata</h5>
                        </div>
                    </div>
                    <Popularcity />
                </div>
            </div>
            {/* Popular Cities end */}
            {/* featuredProperties start */}
            <div className='newlyLaunched' style={{
                paddingTop:"40px"
            }}>
                <div className='container'>
                    {/* <h4 className='text-center subtitle'>HOT PROPERTIES</h4> */}
                    <h1 className='text-start title'>Newly Launched</h1>
                    <div className='properties'>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f1.jpg" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹49 Lakh*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f2.jpg" alt="" />
                            </div>
                            <h5>Vista Corner</h5>
                            <h6>Sector 89, Gurugram</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹79 Lakh*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f3.jpg" alt="" />
                            </div>
                            <h5>EKAM</h5>
                            <h6>Velimela, Hyderabad</h6>
                            <p>Residential</p>
                            <h4>Starting ₹1.16 Crore*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f4.jpg" alt="" />
                            </div>
                            <h5>Mansha Affordable</h5>
                            <h6>Sector 104, Faridabad</h6>
                            <p>Residential</p>
                            <h4>Starting ₹31.25 Lakh*</h4>
                        </div>
                    </div>
                    <p className='text-center'><a href="Forbuyers" className='button'>View All</a></p>
                </div>
            </div>
            {/* featuredProperties end */}
            <Footer />
        </>
    )
}
export default Home;
