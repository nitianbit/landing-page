import React, { useState } from 'react';
import './css/demo.css';
import './css/fonts/style.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import Copious from './Copious';
import Floor from './Floor';


const Vistacorner = () => {
    const [popup, setPopup] = useState(false);
    const [Form, setForm] = useState(false);
    const [downloadbro, setDownloadbro] = useState(false);
    const [sch, setSch] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 110) {
            setSch(true);
        } else {
            setSch(false);
        }
    })
    return (
        <>
            <Header />
            {/* banner section start */}
            <div className='builderDealerBanner vista column'>
                <div className='container full'>
                    <div className='left full'>
                    </div>
                    <div className='right'>
                        <form action="" method="post">
                            <h4>ARE YOU SEEKING TO INVEST
                                IN A COMMERCIAL COMPLEX
                                IN COPIOUS VISTA CORNER?</h4>
                            <h4>REQUEST A CALLBACK:</h4>
                            <input type="text" name="" id="" placeholder="Full Name"></input>
                            <input type="email" name="" id="" placeholder="Email ID"></input>
                            <input type="tel" name="" id="" placeholder="Mobile Number"></input>
                            <input type="text" name="" id="" placeholder="City you are living in"></input>
                            <select name="" id="">
                                <option value="">Your Investment Budget</option>
                                <option value="">Your Investment Budget</option>
                                <option value="">Your Investment Budget</option>
                                <option value="">Your Investment Budget</option>
                            </select>
                            <select name="" id="">
                                <option value="">How Soon are you planning</option>
                                <option value="">How Soon are you planning</option>
                                <option value="">How Soon are you planning</option>
                                <option value="">How Soon are you planning</option>
                            </select>
                            <select name="" id="">
                                <option value="">Your Preferrable Calling Time</option>
                                <option value="">Your Preferrable Calling Time</option>
                                <option value="">Your Preferrable Calling Time</option>
                                <option value="">Your Preferrable Calling Time</option>
                            </select>
                            <div className='d-flex align-center mb-3'>
                                <input type="checkbox" name="" id="agree"></input>
                                <label for="agree">I agree to receive information regarding my submitted enquiry* </label>
                            </div>
                            <input type="button" name="" value="Schedule a Call" className='button' onClick={() => { setPopup(!popup) }}></input>
                        </form>
                    </div>
                </div>
            </div>
            {/* banner section end */}
            {/* content */}
            <div className='vistaContent'>
                <div className='container'>
                    <h1>Copious Vista Corner</h1>
                    <h3>Sector 89, Gurgaon</h3>
                    <p>Commercial SCO Plots & Showrooms</p>
                    <h2>Starting ₹79 Lakh*</h2>
                    <h1 className='not'>Copious Vista Corner Overview</h1>
                    <div className='Facility'>
                        <div className='sinBox'>
                            <img src="./images/icon1.png" alt="" />
                            <div className=''>
                                <h5>Project Size</h5>
                                <p>3.78 Acres</p>
                            </div>
                        </div>
                        <div className='sinBox'>
                            <img src="./images/icon2.png" alt="" />
                            <div className=''>
                                <h5>Total Units</h5>
                                <p>395</p>
                            </div>
                        </div>
                        <div className='sinBox'>
                            <img src="./images/icon3.png" alt="" />
                            <div className=''>
                                <h5>Legal Approva</h5>
                                <p>HRERA & SEIAA</p>
                            </div>
                        </div>
                        <div className='sinBox'>
                            <img src="./images/icon4.png" alt="" />
                            <div className=''>
                                <h5>RERA ID</h5>
                                <p>GGM/634/366/2022/109</p>
                            </div>
                        </div>
                    </div>
                    <p><button type='button' className='button' onClick={() => { setDownloadbro(!downloadbro) }}>Download Brochure</button></p>
                </div>
            </div>
            {/* section end */}
            {/* featuredProperties start */}
            <div className='gallery'>
                <div className='container'>
                    <h1 className='title'>Copious Vista Corner Photos</h1>
                    <div className='properties'>
                        <div className='imgBox'>
                            <img src="./images/1.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/2.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/3.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/4.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/5.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/6.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/7.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/8.jpg" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/1.jpg" alt="" />
                        </div>
                    </div>
                    <Copious />
                </div>
            </div>
            {/* featuredProperties end */}
            {/* content */}
            <div className='aboutUs'>
                <div className='container'>
                    <h1 className='not'>Why Buy in Copious Vista Corner?</h1>
                    <p>The project is being developed as a Combination of Retail, Entertainment & Restaurants</p>
                    <h3>AMENITIES</h3>
                    <ul>
                        <li>Lower Ground, Ground & First Floor for Retail</li>
                        <li>Entertainment Zone & Restaurants on the Second Floor</li>
                        <li>4 Screen Multiplex on Third Floor</li>
                        <li>Dedicated space for Hyper Market of 20000 Sq. Ft. at the Lower Ground Floor</li>
                        <li>Dedicated space for multi-level anchor stores</li>
                        <li>Two Level Basement Parking</li>
                        <li>Total Build-Up Area = 6 Lac Sq. Ft. (Approx)</li>
                    </ul>
                    <h3>LOCATION ADVANTAGES</h3>
                    <p>Discover the Best Investment Opportunities in <b>New Gurugram's Premium Sector 89.</b> Looking for the perfect
                        investment opportunity in the residential and commercial sectors? Look no further than New Gurgaon's Sector 89 –
                        one of the city's most prestigious areas. With carefully planned and improved infrastructure, New Gurgaon has
                        become a top choice for property investment in recent years.</p>
                    <p>The site boasts multiple expressways and highways – both operational and proposed – making it ideal for both
                        commercial and residential needs. It is situated right on the 135 Mtr. Multi-Utility Corridor, which links the IMT Manesar
                        to the Dwarka Expressway, giving the area a luxurious and premium feel. With a complete retail hub, this location is
                        the ultimate destination for shopping, entertainment, and leisure.</p>

                    <h3>HIGHLIGHTS</h3>
                    <ul>
                        <li>Immediate access to NH-8 and SPR Road</li>
                        <li>The best MNCs, Colleges and Universities of Gurugram just a short drive away</li>
                        <li>Only a short drive away from IGI Airport and HUDA City Center</li>
                        <li>Hot-Spot for new residential developments and luxury apartments</li>
                        <li>In center of Manesar and Gurugram</li >
                        <li>Situated bang on the 135 Mtr.Multi - Utility Corridor, which connects the IMT</li >
                        <li>Manesar to Dwarka</li >
                    </ul>
                    <h1 className='not'>About Project - Copious Vista Corner</h1>
                    <p>Copious Vista Corner, located in Sector 89, Gurgaon, is an exciting new launch offering commercial investment opportunities to
                        suit a range of budgets. For those seeking high returns, it stands out as one of Gurgaon's most desirable commercial projects,
                        providing properties with excellent visibility and significant foot traffic.</p>

                    <p>Designed as a next-generation commercial hub, Copious Vista Corner boasts modern facilities and amenities, strategically located
                        in Sector 89. This area is rapidly developing, with improved infrastructure and connectivity compared to other commercial zones
                        in Gurgaon. Investors have access to a wide variety of property options, accommodating diverse budget needs, making it an ideal
                        choice for various types of professionals.</p>

                    <p>Developed by Copious Realtors Pvt Ltd, a well-known name in Gurgaon’s real estate, this luxurious project spans 3.78 acres and is
                        perfectly connected by key roads, including the Dwarka Expressway and Pataudi Road. With 395 units, Copious Vista Corner is
                        currently in its mid-construction phase and promises to deliver a premium commercial experience.</p>
                </div >
            </div >
            {/* section end */}
            {/* plan start */}
            <div class="plans">
                <div class="container">
                    <h2>Copious Vista Corner Floor Plans</h2>
                    <div class="planImg">
                        <img src="./images/p1.jpg" alt="" />
                        <img src="./images/p2.jpg" alt="" />
                        <img src="./images/p3.jpg" alt="" />
                        <img src="./images/p4.jpg" alt="" />
                        <img src="./images/p5.jpg" alt="" />
                        <img src="./images/p6.jpg" alt="" />
                        <img src="./images/p7.jpg" alt="" />
                        <img src="./images/p8.jpg" alt="" />
                        <img src="./images/p9.jpg" alt="" />
                        <img src="./images/p10.jpg" alt="" />
                    </div>
                    <Floor />
                </div>
            </div>
            {/* plan end */}
            {/* content */}
            <div className='aboutUs mb-4'>
                <div className='container'>
                    <h1 className='not'>About Developer - Copious Realtors Pvt. Ltd.</h1>
                    <p>Copious Realtors Pvt. Ltd. brings extensive experience in real estate development, with a strong focus on constructing commercial
                        complexes, multiplexes, shopping malls, and hotels. Their visionary approach has been instrumental in establishing the company
                        as a respected and trusted name among retailers and business partners alike.</p>

                    <p>The company’s reputation as a renowned real estate developer is built on an unwavering commitment to quality and timely
                        delivery. Copious Realtors maintain stringent quality standards, ensuring every project meets the expectations of their clients
                        without compromise.</p>

                    <p>Beyond just constructing commercial spaces and malls, Copious Realtors prioritize brand standards and client satisfaction. With a
                        dedicated in-house construction team, they offer full support and coordination throughout the development process, ensuring
                        seamless project execution and the best service to their clients.</p>
                    <h3>Notable Projects:</h3>
                    <ul>
                        <li>Crowne Plaza Hotel Rohini, Delhi</li>
                        <li>City Center Rohini, Delhi</li>
                        <li>V3S East Center Laxmi Nagar, Delhi</li>
                        <li>Sapphire Ninety, Gurugram</li>
                        <li>Ring Road Mall, Rohini, Delhi</li>
                        <li>V3S Mall, Laxmi Nagar, Delhi</li>
                    </ul>

                </div >
            </div >
            <p className={sch ? "sch active" : "sch"}>
                <button type='button' className='button' onClick={() => { setForm(!Form) }}>Schedule a Call</button>
            </p>
            <div className={popup ? "popup active" : "popup"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setPopup(!popup) }}></span>
                    <div class="left">
                        <h4 className='text-center'>Thanks for the form submission</h4>
                        <p className='text-center download'>
                            <a href="vistacorner" className='button' download >Download Brochure</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className={Form ? "Form active" : "Form"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setForm(!Form) }}></span>
                    <form action="#" method="post">
                        <h4 className='text-center'>Get in Touch</h4>
                        <input type="text" name="" id="" placeholder="Full Name"></input>
                        <input type="email" name="" id="" placeholder="Email ID"></input>
                        <input type="tel" name="" id="" placeholder="Mobile Number"></input>
                        <input type="text" name="" id="" placeholder="City you are living in"></input>
                        <select name="" id="">
                            <option value="">You are</option>
                            <option value="">You are</option>
                            <option value="">You are</option>
                            <option value="">You are</option>
                        </select>
                        <div className='d-flex align-center mb-3'>
                            <input type="checkbox" name="" id="agre"></input>
                            <label for="agre">I agree to receive information regarding my submitted enquiry* </label>
                        </div>
                        <input type="button" name="" value="Schedule a Call" className='button' onClick={() => { setPopup(!popup) }}></input>
                    </form>
                </div>
            </div>
            <div className={downloadbro ? "downloadbro active" : "downloadbro"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setDownloadbro(!downloadbro) }}></span>
                    <form action="#" method="post">
                        <h4 className=''>ARE YOU SEEKING TO INVEST
                                IN A COMMERCIAL COMPLEX
                                IN COPIOUS VISTA CORNER?</h4>
                        <input type="text" name="" id="" placeholder="Full Name"></input>
                        <input type="email" name="" id="" placeholder="Email ID"></input>
                        <input type="tel" name="" id="" placeholder="Mobile Number"></input>
                        <div className='d-flex align-center mb-3'>
                            <input type="checkbox" name="" id="agr" required="required"></input>
                            <label for="agr">I agree to receive information regarding my submitted enquiry* </label>
                        </div>
                        <p className="text-center"><a href="Vistacorner" className='button' download >Download Brochure</a></p>
                    </form>
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Vistacorner;