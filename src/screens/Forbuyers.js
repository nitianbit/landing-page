import React from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';


const Forbuyers = () => {
    return (
        <>
            <Header />
            {/* Sorting */}
            <div className='sorting'>
                <div className='container flex-between-center'>
                    <button className='btn'>All Properties</button>
                    <select name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                    </select>
                </div>
            </div>
            <div className='container flex-between-center'>
                <div className='allProperties '>
                    <div className='sinPro '>
                        <div className='d-flex gp3'>
                            <div className='img'>
                                <img src="./images/f2.jpg" alt=""/>
                            </div>
                            <div className='info '>
                                <h2>Copious Vista Corner</h2>
                                <h4>Sector 89, Gurgaon</h4>
                                <p>Commercial SCO Plots & Showrooms</p>
                                <h3>Starting ₹79 Lakh*</h3>
                                <div className='Facility column'>
                                    <div className='sinBox full'>
                                        <img src="./images/icon1.png" alt="" />
                                        <div className=''>
                                            <h5>Project Size</h5>
                                            <p>3.78 Acres</p>
                                        </div>
                                    </div>
                                    <div className='sinBox full'>
                                        <img src="./images/icon2.png" alt="" />
                                        <div className=''>
                                            <h5>Total Units</h5>
                                            <p>395</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon3.png" alt="" />
                                        <div className=''>
                                            <h5>Legal Approval</h5>
                                            <p>HRERA</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon4.png" alt="" />
                                        <div className=''>
                                            <h5>RERA ID</h5>
                                            <p>GGM/634/366</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='red smd'>Copious Vista Corner is an exciting <b>Commercial Investment Opportunities </b>to suit a range of budgets. For those seeking <b>High Returns,</b> it stands out as one of Gurgaon's most desirable commercial projects<a href="Vistacorner"> Read More</a>
                        </p>
                        <div className='Developer flex-between-center'>
                            <div className=''>
                                <h5>Developer</h5>
                                <p>Copious Realtors</p>
                            </div>
                            <a href="Vistacorner" className='button'>MORE DETAILS</a>
                        </div>
                    </div>
                    <div className='sinPro '>
                        <div className='d-flex gp3'>
                            <div className='img'>
                                <img src="./images/f2.jpg" alt=""/>
                            </div>
                            <div className='info '>
                                <h2>Copious Vista Corner</h2>
                                <h4>Sector 89, Gurgaon</h4>
                                <p>Commercial SCO Plots & Showrooms</p>
                                <h3>Starting ₹79 Lakh*</h3>
                                <div className='Facility column'>
                                    <div className='sinBox full'>
                                        <img src="./images/icon1.png" alt="" />
                                        <div className=''>
                                            <h5>Project Size</h5>
                                            <p>3.78 Acres</p>
                                        </div>
                                    </div>
                                    <div className='sinBox full'>
                                        <img src="./images/icon2.png" alt="" />
                                        <div className=''>
                                            <h5>Total Units</h5>
                                            <p>395</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon3.png" alt="" />
                                        <div className=''>
                                            <h5>Legal Approval</h5>
                                            <p>HRERA</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon4.png" alt="" />
                                        <div className=''>
                                            <h5>RERA ID</h5>
                                            <p>GGM/634/366</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='red smd'>Copious Vista Corner is an exciting <b>Commercial Investment Opportunities </b>to suit a range of budgets. For those seeking <b>High Returns,</b> it stands out as one of Gurgaon's most desirable commercial projects<a href="Vistacorner"> Read More</a>
                        </p>
                        <div className='Developer flex-between-center'>
                            <div className=''>
                                <h5>Developer</h5>
                                <p>AURIC GROUP</p>
                            </div>
                            <a href="Vistacorner" className='button'>MORE DETAILS</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sorting */}
            < Footer />
        </>
    )
}
export default Forbuyers;