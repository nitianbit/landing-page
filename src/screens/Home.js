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
                <div className='container'>
                    <h1 className='text-center'>THINKING OF BUYING YOUR <br></br> HOME OR OFFICE?</h1>
                    <h4 className='text-center'>
                        <span> GET THE CARE AND GUIDANCE YOU DESERVE</span>
                    </h4>
                    <p className='text-center'>
                        <a href="Contactus" className='button'>Contact Us</a>
                    </p>
                </div>
            </div>
            {/* banner section end */}
            {/* featuredProperties start */}
            <div className='featuredProperties'>
                <div className='container'>
                    <h4 className='text-center subtitle'>WHAT WE OFFER</h4>
                    <h1 className='text-center title'>Featured Properties</h1>
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
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/3.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/4.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/5.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/6.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/7.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/8.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                    </div>
                    <Featured />
                </div>
            </div>
            {/* featuredProperties end */}
            {/* Popular Cities start */}
            <div className='popularCities'>
                <div className='container'>
                    <h1 className='text-center title'>Popular Cities</h1>
                    <div className='cities'>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c1.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c2.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c3.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c4.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c5.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c6.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c7.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c8.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c1.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/c2.jpg" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                    </div>
                    <Popularcity />
                </div>
            </div>
            {/* Popular Cities end */}
            {/* featuredProperties start */}
            <div className='newlyLaunched'>
                <div className='container'>
                    <h4 className='text-center subtitle'>HOT PROPERTIES</h4>
                    <h1 className='text-center title'>NEWLY LAUNCHED</h1>
                    <div className='properties'>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f1.jpg" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹79 Lakh*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f2.jpg" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹79 Lakh*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f3.jpg" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹79 Lakh*</h4>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f4.jpg" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h4>Starting ₹79 Lakh*</h4>
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