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
                    {/* <select name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                        <option value="">Sort By</option>
                    </select> */}
                </div>
            </div>
            <div className='container flex-between-center'>
                <div className='allProperties ' style={{
                    width: "-webkit-fill-available"
                }}>
                    <div className='sinPro '>
                        <div className='d-flex gp3'>
                            <div className='img'>
                                <img src="./images/f2.jpg" alt="" />
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
                                            <p>HRERA & SEIAA</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon4.png" alt="" />
                                        <div className=''>
                                            <h5>RERA ID</h5>
                                            <p>GGM/634/366/2022/109</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='red smd'>Copious Vista Corner is an exciting <b>Commercial Investment Opportunities </b>to suit a range of budgets. For those seeking <b>High Returns,</b> it stands out as one of Gurgaon's most desirable commercial projects.<a href="Vistacorner"> Read More</a>
                        </p>
                        <div className='Developer flex-between-center'>
                            <div className=''>
                                <h5>Developer</h5>
                                <p>Copious Realtors Pvt. Ltd.</p>
                            </div>
                            <a href="Vistacorner" className='button'>MORE DETAILS</a>
                        </div>
                    </div>
                    <div className='sinPro '>
                        <div className='d-flex gp3'>
                            <div className='img'>
                                <img src="./images/f1.jpg" alt="" />
                            </div>
                            <div className='info '>
                                <h2>Universal Square by Auric Group</h2>
                                <h4>Sector 79, Faridaad</h4>
                                <p>Commercial SCO Floors and Plots</p>
                                <h3>Starting ₹49 Lakh*</h3>
                                <div className='Facility column'>
                                    <div className='sinBox full'>
                                        <img src="./images/icon1.png" alt="" />
                                        <div className=''>
                                            <h5>Project Size</h5>
                                            <p>13.87 Acres</p>
                                        </div>
                                    </div>
                                    <div className='sinBox full'>
                                        <img src="./images/icon2.png" alt="" />
                                        <div className=''>
                                            <h5>Total Units</h5>
                                            <p>227</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon3.png" alt="" />
                                        <div className=''>
                                            <h5>Legal Approval</h5>
                                            <p>DTCP & HRERA</p>
                                        </div>
                                    </div>
                                    <div className='sinBox smd'>
                                        <img src="./images/icon4.png" alt="" />
                                        <div className=''>
                                            <h5>RERA ID</h5>
                                            <p>HRERA-PKL-FBD-440-2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='red smd'>Universal Square has wide options for the
                             <b> Commercial Property Investments </b> 
                             ranging from complete 
                             <b> SCO's, Independent SCO floors with Basement </b> &<b> Ground + 3 floors with lifts. </b>
                            <a href="Vistacorner">
                                Read More</a>
                        </p>
                        <div className='Developer flex-between-center'>
                            <div className=''>
                                <h5>Developer</h5>
                                <p>AURIC GROUP</p>
                            </div>
                            <a href="Universalsquare" className='button'>MORE DETAILS</a>
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
