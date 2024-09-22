import React, {useEffect, useState} from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import Copious from './Copious';
import Popularcity from './Popularcity';
import { useUserContext } from '../context/UserContext';
import { doGET } from '../utils/HttpUtils';
import { handleSubmit } from '../components/handleSubmit';


const Universalsquare = () => {
    const { products, project } = useUserContext()
    const [data, setData] = useState({});
    const [popup, setPopup] = useState(false);
    const [product, setProducts] = useState(null)
    const [forms, setForms] = useState(null)
    const [phoneNo, setPhoneNo] = useState(null)


    const getProducts = async () => {
        try {
            const response = await doGET(`/product/${products[0]?._id}`);
            setProducts(response)
            // const formsArray = Array.from({ length: 3 }, (_, index) => response?.forms?.find(form => form.formIndex === index) || []);
            response?.forms?.sort((a, b) => a.formIndex - b.formIndex)
            setForms({
                first: response.forms?.length ? response.forms[0] : null,
                second: response.forms?.length > 1 ? response.forms[1] : null,
                // third: response[2],
            });
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    const handleInputChange = (fieldName, value, type) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
        if ((type == "number" && (fieldName == "Phone" || fieldName == "phone")) ? value : null) {
            setPhoneNo((type == "number" && (fieldName == "Phone" || fieldName == "phone")) ? value : null)
        }
    };

    useEffect(() => {
        if (products) {
            getProducts()
        }
    }, [products])
    return (
        <>
            <Header />
            {/* Sorting */}
            {/* banner section start */}
            <div className='builderDealerBanner uni'>
                <div className='container flex-between-center column'>
                    <div className='left'>
                        
                    </div>
                    <div className='right'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            console.log("hey")
                                handleSubmit({ e, form: forms?.first, formData: data, phone: phoneNo, project, productId:products[1]?._id  }).then(res => {
                                    res && setData({})
                                })
                                setPopup(!popup)
                            }}>
                            {forms?.first && forms?.first?.fields?.map((field, fieldIndex) => (
                                field?.type === "select" ? (
                                    <select
                                        key={fieldIndex}
                                        value={data[field?.name] || ''}
                                        name={field?.name}
                                        required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                        onChange={(e) => handleInputChange(field?.name, e.target.value)}
                                        label={field?.label}
                                        id="">
                                        <option value="" disabled selected>{`Select ${field.label}`}</option>
                                        {field?.options?.length ? (
                                            field.options.map((option, optionIndex) => (
                                                <option key={optionIndex} value={option}>{option}</option>
                                            ))
                                        ) : (
                                            <>
                                                <option value="">Your Investment Budget</option>
                                                <option value="">Your Investment Budget</option>
                                                <option value="">Your Investment Budget</option>
                                            </>
                                        )}
                                    </select>
                                ) : (
                                    <input
                                        key={fieldIndex}
                                        type={field?.type}
                                        name={field?.name}
                                        placeholder={field.label}
                                        value={data[field?.name] || ''}
                                        onChange={(e) => handleInputChange(field?.name, e.target.value, field?.type)}
                                        required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                    />
                                )
                            ))}
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
                    <h1>Universal Square by Auric Group</h1>
                    <h3>Sector 79, Faridaad</h3>
                    <p>Independent SCO Floors and Commercial SCO Plots</p>
                    <h2>Starting ₹49 Lakh*</h2>
                    <h1>Universal Square Overview</h1>
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
                    <p><a href="Universalsquare" className="button" download>Download Brochure</a></p>
                </div>
            </div>
            {/* section end */}
            {/* featuredProperties start */}
            <div className='gallery'>
                <div className='container'>
                    <h1 className='text-center title'>Universal Square Photos</h1>
                    <div className='properties'>
                        <div className='imgBox'>
                            <img src="./images/1.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/2.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/3.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/4.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/5.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/6.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/7.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/8.png" alt="" />
                        </div>
                        <div className='imgBox'>
                            <img src="./images/1.png" alt="" />
                        </div>
                    </div>
                    <Copious />
                </div>
            </div>
            {/* featuredProperties end */}
            {/* content */}
            <div className='aboutUs'>
                <div className='container'>
                    <h1>Why Buy in Universal Square?</h1>
                    <h3>AMENITIES</h3>
                    <div className='cities'>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/1.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/2.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/2.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/3.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/4.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/5.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/6.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/7.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/8.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/1.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/2.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                        <div className='singleCities'>
                            <div className='imgBox'>
                                <img src="./images/3.png" alt="" />
                            </div>
                            <h5>Residential Apartments</h5>
                        </div>
                    </div>
                    <Popularcity />
                    <h3>LOCATION ADVANTAGES</h3>
                    <div className='locAd'>
                        <div className='sinad'>
                            <span className='percent'>00</span>
                            <p>MINUTES ADJACENT TO
                                THE INSTITUTIONAL BELT</p>

                        </div>
                        <div className='sinad'>
                            <span className='percent'>05</span>
                            <p>MINUTES DRIVE TO THE
                                NEAREST METRO STATION</p>

                        </div>
                        <div className='sinad'>
                            <span className='percent'>10</span>
                            <p>MINUTES DRIVE TO FORTIS
                                ESCORT HOSPITAL</p>

                        </div>
                        <div className='sinad'>
                            <span className='percent'>15</span>
                            <p>MINUTES DRIVE TO
                                GREATER NOIDA
                            </p>
                        </div>
                        <div className='sinad'>
                            <span className='percent'>15</span>
                            <p>MINUTES DRIVE TO
                                BADARPUR FLY OVER</p>
                        </div>
                        <div className='sinad'>
                            <span className='percent'>20</span>
                            <p>MINUTES DRIVE TO
                                SOUTH DELHI</p>
                        </div>
                        <div className='sinad'>
                            <span className='percent'>35</span>
                            <p>MINUTES DRIVE TO
                                GURGAON</p>
                        </div>
                        <div className='sinad'>
                            <span className='percent'>35</span>
                            <p>MINUTES DRIVE TO
                                AIRPORT</p>
                        </div>
                    </div>
                    <h3>HIGHLIGHTS</h3>
                    <ul>
                        <li>Welcome Court</li>
                        <li>The Front Square</li>
                        <li>The Central Square</li>
                        <li>The Rear Square</li>
                        <li>The Northern Square ( Walk | Drive | Park )</li>
                        <li>The Southend Square ( Walk | Drive| Park )</li>
                        <li>The Westend Square ( Walk | Drive| Park )</li>
                        <li>The Basement Is The Very Base Of Business</li>
                        <li>The Universal Link</li>
                        <li>Building Height Multi-level Store Height</li>
                        <li>Ample surface car parking</li>
                        <li>Wider service alleys</li>
                        <li>Facilitate by wide range plazas</li>
                        <li>Distinctly designed space for pedestrian and vehicular movement</li>
                    </ul>
                    <h1>About Project - Universal Square</h1>
                    <p>Independent Commercial Space</p>
                    <p>A Vision of Future, Success, Change, and Growth</p>
                    <p>Universal Square is a project that incubates hope, business spirit, and countless opportunities for growth. Designed with a deep
understanding of retail and business, inspired by the world’s best commercial projects. Universal Square includes an internal
environment that facilitates futuristic, strategic, and long-term visions.
</p>
                    <p>Situated in Faridabad Sector 79, the Universal Square is planned to offer a modern lifestyle to all the residents. It covers an area of
13.87 Acre giving enough green space to residents. This project encompasses over 227 units.</p>
                    <p>The units are all Under Construction. Officially this grand project's launch date is 01 April 2023. Its official date of possession is 01
June 2027.
</p>
                    <p>The commencement certificate of the impressive Universal Square project has been granted, known for their quality constructions
Auric Group has developed Universal Square project. The address of this smartly planned project is Sector 79, Neharpar,
Faridabad - 121002, Haryana. At Universal Square, you can enjoy a modern lifestyle as all conveniences are easily available.</p>

                    <h1>About Developer - AURIC GROUP</h1>
                    <p>Auric Group, founded by Sandeep Aggarwal and Rajeev Aggarwal, has made significant progress in civil construction and real
estate. Their vision is to become a trusted and progressive name in the industry by delivering quality, professionalism, and value.
They aim to provide premium housing at international standards while keeping prices affordable for the Indian market. Their
ultimate goal is to be a major infrastructure and growth driver for India's development. Auric Group received the Best Debutant of
the Year Award for their project Auric Villas in Rajasthan in 2012.</p>
                    <p>A Real Estate Group with proven track record of well planned execution and timely delivery of Residential and Commercial spaces
and thus creating landmark projects which are truly enriching people’s life and their life style.
</p>
                    <h3>Auric as a group committed to excellence, focuses on:</h3>
                    
                    <ul>
                        <li>Precision in Planning</li>
                        <li>Quality in Execution</li>
                        <li>Delivery on Time</li>
                        
                    </ul>
                </div >
            </div >
            {/* section end */}
            <div className={popup ? "popup active" : "popup"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => { setPopup(!popup) }}></span>
                    <div class="left">
                        <h4 className='text-center'>Thanks for the form submission</h4>
                        <p className='text-center'><a href="#Schedule" className='button' download>Download Brochure</a>
                        </p>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Universalsquare;