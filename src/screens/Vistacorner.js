import React, { useContext, useEffect, useState } from 'react';
import './css/demo.css';
import './css/fonts/style.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import Copious from './Copious';
import Floor from './Floor';
import { doGET } from '../utils/HttpUtils';
import { useUserContext } from '../context/UserContext';
import { handleSubmit, sendOTP, verifyOTP } from '../components/handleSubmit';
import OTPPage from '../components/OTP/OtpPage';
import ThankYouPage from '../components/ThankYou/ThankYouPage'
import { useNavigate } from 'react-router-dom';
import { validateFields, handleBlur } from '../utils/helper';
import useWindowResize from '../hooks/useWindowResize';
import downloadPdf from '../components/DownloadPdf';



const Vistacorner = () => {
    const navigate = useNavigate()

    const { products, project } = useUserContext()
    const [data, setData] = useState({});
    const [data1, setData1] = useState({});
    const [errors, setErrors] = useState({});
    // const [popup, setPopup] = useState(false);
    const [product, setProducts] = useState(null)
    const [forms, setForms] = useState(null)
    const [phoneNo, setPhoneNo] = useState(null)
    const [phoneNo1, setPhoneNo1] = useState(null)
    const [Veri, setVeri] = useState(false);
    const [thank, setThank] = useState(false);

    const getProducts = async () => {
        try {
            const response = await doGET(`/product/${products[1]?._id}`);
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
        if (((type == "number" || type == "tel") && (fieldName == "Phone" || fieldName == "phone" || fieldName == "mobile")) ? value : null) {
            setPhoneNo(((type == "number" || type == "tel") && (fieldName == "Phone" || fieldName == "phone" || fieldName == "mobile")) ? value : null)
        }
    };

    const handleInputChange1 = (fieldName, value, type) => {
        setData1(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
        if (((type == "number" || type == "tel") && (fieldName == "Phone" || fieldName == "phone" || fieldName == "mobile")) ? value : null) {
            setPhoneNo1(((type == "number" || type == "tel") && (fieldName == "Phone" || fieldName == "phone" || fieldName == "mobile")) ? value : null)
        }
    };

    const handleBlurWithError = (field, data) => {
        // Return the error and update state
        const error = handleBlur(field, data);
        setErrors(prevErrors => ({ ...prevErrors, ...error }));
    };

    useEffect(() => {
        if (products) {
            getProducts()
        }
    }, [products])


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
   const {isMobile} =  useWindowResize()
    return (
        <>
            {/* banner section start */}

            <div className='builderDealerBanner vista column header-image-view '>
                <img src={`/images/${isMobile ? 'vista_mobile.jpg' : 'vista_laptop.jpg'}`} className='header-image'/>
                <div className='container full'>
                    <div className='right'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            const errorList = validateFields(forms?.first?.fields, data, setErrors);
                            if (Object.keys(errorList).length <= 0) {
                                setErrors({});
                                handleSubmit({ e, form: forms?.first, formData: data, phone: phoneNo, project, productId: products[1]?._id })
                                if (forms?.first?.showOTP) {
                                    setVeri(!Veri)
                                } else {
                                    navigate("/thankYou")
                                    setData({})
                                }
                            } else {
                                setErrors(errorList)
                            }
                        }}>
                            <h4>
                                ARE YOU SEEKING TO INVEST
                                IN A COMMERCIAL COMPLEX?
                            </h4>
                            <h4>REQUEST A CALLBACK:</h4>
                            {forms?.first && forms?.first?.fields?.map((field, fieldIndex) => (
                                <div key={fieldIndex} >
                                    {field?.type === "select" ? (
                                     <div className="select-wrapper">
                                        <select
                                            value={data[field?.name] || ''}
                                            name={field?.name}
                                            required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                            onChange={(e) => handleInputChange(field?.name, e.target.value)}
                                            style={{WebkitAppearance:'none', color:data[field?.name]?'#000':'#999'}}
                                            
                                        >
                                            <option value="" disabled>{`${field.label}`}</option>
                                            {field?.options?.length ? (
                                                field.options.map((option, optionIndex) => (
                                                    <option key={optionIndex} value={option}>{option}</option>
                                                ))
                                            ) : null}
                                        </select>
                                      </div>
                                    ) : (
                                        <input
                                            type={field?.type}
                                            name={field?.name}
                                            onBlur={() => handleBlurWithError(field, data)}
                                            placeholder={field.label}
                                            value={data[field?.name] || ''}
                                            onChange={(e) => handleInputChange(field?.name, e.target.value, field?.type)}
                                            required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                            style={{color:data[field?.name]?'#000':'#999'}}
                                        />
                                    )}
                                    {errors[field.name] && (
                                        <div style={{ color: 'red', margin: '0px 0px 5px 10px', fontSize: "12px" }}>
                                            {errors[field.name]}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className='d-flex align-center mb-3'>
                                <input required type="checkbox" name="" id="agree"></input>
                                <label for="agree">I agree to receive information regarding my submitted enquiry* </label>
                            </div>
                            <input type="submit" name="" value="Schedule a Call" className='button'></input>
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
                    <p>Commercial Shops, Food Court & Restaurants</p>
                    <h2 style={{
                        borderBottom: "1px solid #ddd"
                    }}>Starting ₹1.15 Cr*</h2>
                    <h1 className='not'>Overview</h1>
                    <div className='Facility'>
                        <div style={{
                                display:"flex",
                                alignItems:"start"
                            }} className='sinBox'>
                            <img src="./images/icon1.png" alt="" />
                            <div className=''>
                                <h5>Project Size</h5>
                                <p>3.78 Acres</p>
                            </div>
                        </div>
                        <div style={{
                                display:"flex",
                                alignItems:"start"
                            }} className='sinBox'>
                            <img src="./images/icon2.png" alt="" />
                            <div className=''>
                                <h5>Total Units</h5>
                                <p>395</p>
                            </div>
                        </div>
                        <div style={{
                                display:"flex",
                                alignItems:"start"
                            }} className='sinBox'>
                            <img src="./images/icon3.png" alt="" />
                            <div  className=''>
                                <h5>Legal Approval</h5>
                                <p>HRERA & SEIAA</p>
                            </div>
                        </div>
                        <div style={{
                                display:"flex",
                                alignItems:"start"
                            }} className='sinBox'>
                            <img src="./images/icon4.png" alt="" />
                            <div className=''>
                                <h5>RERA ID</h5>
                                <p>GGM/634/366/2022/109</p>
                            </div>
                        </div>
                    </div>
                    <p style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "16px"
                    }}><button style={{
                        marginTop: "20px",
                    }} type='button' className='button' onClick={() => {
                        setDownloadbro(!downloadbro)
                        setErrors({})
                    }}>Download Brochure</button></p>
                </div>
            </div>
            {/* section end */}
            {/* featuredProperties start */}
            {/* <div className='gallery'>
                <div className='container' style={{
                    borderBottom: "1px solid #ddd"
                }}>
                    <h1 className='title' style={{
                        marginTop:"40px"
                    }}> Photos</h1>
                    <div className='properties'>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/1.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/2.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/3.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/4.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/5.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/6.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/7.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/8.jpg" alt="" />
                        </div>
                        <div className='imgBox' style={{
                            marginBottom:"14px"
                        }}>
                            <img src="./images/1.jpg" alt="" />
                        </div>
                    </div>
                    <Copious />
                </div>
            </div> */}
            {/* featuredProperties end */}
            {/* content */}
            <div className='aboutUs' style={{
                paddingTop:"24px"
            }}>
                <div className='container'>
                    <h1 className='not'>Why Vista Corner?</h1>
                    <p>The project is being developed as a Combination of Retail, Entertainment & Restaurants.</p>
                    <h3 style={{ fontSize: "18px", marginTop: "31px" }}>AMENITIES</h3>
                    <ul>
                        <li>Lower Ground, Ground & First Floor for Retail</li>
                        <li>Entertainment Zone & Restaurants on the Second Floor</li>
                        <li>4 Screen Multiplex on Third Floor</li>
                        <li>Dedicated space for Hyper Market of 20000 Sq. Ft. at the Lower Ground Floor</li>
                        <li>Dedicated space for multi-level anchor stores</li>
                        <li>Two Level Basement Parking</li>
                        <li>Total Build-Up Area = 6 Lac Sq. Ft. (Approx)</li>
                    </ul>
                    <h3 style={{
                        marginTop: "31px"
                    }}>LOCATION ADVANTAGES</h3>
                    <p style={{
                        fontSize: "15px",
                        marginBottom: "15px"
                    }}>Discover the Best Investment Opportunities in <b>New Gurugram's Premium Sector 89.</b> Looking for the perfect
                        investment opportunity in the residential and commercial sectors? Look no further than New Gurgaon's Sector 89 –
                        one of the city's most prestigious areas. With carefully planned and improved infrastructure, New Gurgaon has
                        become a top choice for property investment in recent years.</p>
                    <p style={{
                        fontSize: "15px"
                    }}>The site boasts multiple expressways and highways – both operational and proposed – making it ideal for both
                        commercial and residential needs. It is situated right on the 135 Mtr. Multi-Utility Corridor, which links the IMT Manesar
                        to the Dwarka Expressway, giving the area a luxurious and premium feel. With a complete retail hub, this location is
                        the ultimate destination for shopping, entertainment, and leisure.</p>

                    <h3 style={{
                        marginTop: "31px"
                    }}>HIGHLIGHTS</h3>
                    <ul style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "11px"
                    }}>
                        <li>Immediate access to NH-8 and SPR Road</li>
                        <li>The best MNCs, Colleges and Universities of Gurugram just a short drive away</li>
                        <li>Only a short drive away from IGI Airport and HUDA City Center</li>
                        <li>Hot-Spot for new residential developments and luxury apartments</li>
                        <li>In center of Manesar and Gurugram</li >
                        <li>Situated bang on the 135 Mtr.Multi - Utility Corridor, which connects the IMT Manesar to Dwarka</li >
                    </ul>
                    <h1 style={{
                        marginTop: "40px"
                    }} className='not'>About Project</h1>
                    <p style={{
                        fontSize: "15px",
                        marginBottom: "15px"
                    }}>Copious Vista Corner, located in Sector 89, Gurgaon, is an exciting new launch offering commercial investment opportunities to
                        suit a range of budgets. For those seeking high returns, it stands out as one of Gurgaon's most desirable commercial projects,
                        providing properties with excellent visibility and significant foot traffic.</p>

                    <p style={{
                        fontSize: "15px",
                        marginBottom: "15px"
                    }}>Designed as a next-generation commercial hub, Copious Vista Corner boasts modern facilities and amenities, strategically located
                        in Sector 89. This area is rapidly developing, with improved infrastructure and connectivity compared to other commercial zones
                        in Gurgaon. Investors have access to a wide variety of property options, accommodating diverse budget needs, making it an ideal
                        choice for various types of professionals.</p>

                    <p style={{
                        fontSize: "15px",
                        paddingBottom: "16px",
                        borderBottom: "1px solid #ddd"
                    }}>Developed by Copious Realtors Pvt Ltd, a well-known name in Gurgaon’s real estate, this luxurious project spans 3.78 acres and is
                        perfectly connected by key roads, including the Dwarka Expressway and Pataudi Road. With 395 units, Copious Vista Corner is
                        currently in its mid-construction phase and promises to deliver a premium commercial experience.</p>
                </div >
            </div >
            {/* section end */}
            {/* plan start */}
            <div class="plans">
                <div class="container">
                    <h2>Floor Plans</h2>
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
                    <div style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "16px"
                    }}></div>
                </div>
            </div>
            {/* plan end */}
            {/* content */}
            <div className='aboutUs mb-4'>
                <div className='container'>
                    <h1 className='not'>About Developer</h1>
                    <p style={{
                        fontSize: "15px",
                        marginBottom: "15px"
                    }}>Copious Realtors Pvt. Ltd. brings extensive experience in real estate development, with a strong focus on constructing commercial
                        complexes, multiplexes, shopping malls, and hotels. Their visionary approach has been instrumental in establishing the company
                        as a respected and trusted name among retailers and business partners alike.</p>

                    <p style={{
                        fontSize: "15px",
                        marginBottom: "15px"
                    }}>The company’s reputation as a renowned real estate developer is built on an unwavering commitment to quality and timely
                        delivery. Copious Realtors maintain stringent quality standards, ensuring every project meets the expectations of their clients
                        without compromise.</p>

                    <p style={{
                        fontSize: "15px"
                    }}>Beyond just constructing commercial spaces and malls, Copious Realtors prioritize brand standards and client satisfaction. With a
                        dedicated in-house construction team, they offer full support and coordination throughout the development process, ensuring
                        seamless project execution and the best service to their clients.</p>
                    <h3 style={{
                        marginTop: "31px"
                    }}>Notable Projects:</h3>
                    <ul style={{
                        marginBottom: "40px"
                    }}>
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
                <button type='button' className='button' onClick={() => {
                    setForm(!Form)
                    setErrors({})
                }}>Schedule a Call</button>
            </p>
            <OTPPage
                isOpen={Veri}
                setIsOpen={setVeri}
                onSubmit={(v) => {
                    verifyOTP({ formId: forms?.first?._id, phone: phoneNo, otp: v })
                    setData({})
                    setThank(!thank)
                    navigate("/thankYou")
                    downloadPdf("/public/files/Vista.pdf", "vista.pdf")
                }}
                resendOtp={() => {
                    if (phoneNo) {
                        sendOTP(phoneNo)
                    }
                }}
            />

            <div className={popup ? "popup active" : "popup"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => {
                        setPopup(!popup)
                        setErrors({})
                    }}></span>
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
                    <span class="icon-close2 popcls" onClick={() => {
                        setForm(!Form)
                        setErrors({})
                    }}></span>
                    <h4 style={{
                        fontWeight:"500",
                        fontFamily:"Open Sans"
                    }}>
                        ARE YOU SEEKING TO INVEST
                        IN A COMMERCIAL COMPLEX?
                    </h4>
                    <h4 style={{
                        fontWeight:"500",
                        fontFamily:"Open Sans",
                        marginBottom:"31px"
                    }}>REQUEST A CALLBACK:</h4>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const errorList = validateFields(forms?.first?.fields, data, setErrors);
                        if (Object.keys(errorList).length <= 0) {
                            setErrors({});
                            handleSubmit({ e, form: forms?.first, formData: data, phone: phoneNo, project, productId: products[1]?._id })
                            if (forms?.first?.showOTP) {
                                setVeri(!Veri)
                            } else {
                                setData({})
                                navigate("/thankYou")
                            }
                        } else {
                            setErrors(errorList)
                        }

                    }}>
                        {forms?.first && forms?.first?.fields?.map((field, fieldIndex) => (
                            <div key={fieldIndex}>
                                {field?.type === "select" ? (
                                    <div className="select-wrapper">
                                    <select
                                        key={fieldIndex}
                                        value={data[field?.name] || ''}
                                        name={field?.name}
                                        style={{WebkitAppearance:'none', color:data[field?.name]?'#000':'#999'}}
                                        required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                        onChange={(e) => handleInputChange(field?.name, e.target.value)}
                                        label={field?.label}
                                        id="">
                                        <option value="" disabled selected>{`${field.label}`}</option>
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
                                    </div>
                                ) : (
                                    <input
                                        key={fieldIndex}
                                        type={field?.type}
                                        style={{color:data[field?.name]?'#000':'#999'}}
                                        name={field?.name}
                                        onBlur={() => handleBlurWithError(field, data)}
                                        placeholder={field.label}
                                        value={data[field?.name] || ''}
                                        onChange={(e) => handleInputChange(field?.name, e.target.value, field?.type)}
                                        required={forms?.first?.requiredFields?.includes(field?._id) || false}
                                    />
                                )}
                                {errors[field.name] && (
                                    <div style={{ color: 'red', margin: '0px 0px 5px 10px', fontSize: "12px" }}>
                                        {errors[field.name]}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='d-flex align-center mb-3'>
                            <input type="checkbox" required name="" id="agre"></input>
                            <label for="agre">I agree to receive information regarding my submitted enquiry* </label>
                        </div>
                        <input style={{
                            marginTop: "22px"
                        }} type="submit" name="" value="Schedule a Call" className='button'></input>
                    </form>
                </div>
            </div>
            <div className={downloadbro ? "downloadbro active" : "downloadbro"}>
                <div class="inqure">
                    <span class="icon-close2 popcls" onClick={() => {
                        setDownloadbro(!downloadbro)
                        setData1({})
                        setErrors({})
                    }}></span>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const errorList = validateFields(forms?.second?.fields, data1, setErrors);
                        if (Object.keys(errorList).length <= 0) {
                            setErrors({});
                            handleSubmit({ e, form: forms?.second, formData: data1, phone: phoneNo1, project, productId: products[1]?._id }).then(res => {
                                res && setData({})
                            })
                            if (forms?.second?.showOTP) {
                                setVeri(!Veri)
                            } else {
                                setPopup(!popup)
                                setDownloadbro(!downloadbro)
                                navigate("/thankYou")
                                downloadPdf("/files/Vista.pdf", "Vista.pdf")
                            }
                        } else {
                            setErrors(errorList)
                        }

                    }}>
                        <h4 className=''>
                            <div style={{
                                fontWeight: "500"
                            }}>You are requesting to download <br /> brouchure of this property.</div>
                            <br />
                            <div style={{
                                marginBottom: "31px",
                                fontWeight: "500"
                            }}>Please provide your details to download:</div>
                        </h4>

                        {forms?.second && forms?.second?.fields?.map((field, fieldIndex) => (
                            <div key={fieldIndex}>
                                {field?.type === "select" ? (
                                    <div className="select-wrapper">
                                    <select
                                        key={fieldIndex}
                                        value={data1[field?.name] || ''}
                                        name={field?.name}
                                        style={{WebkitAppearance:'none', color:data1[field?.name]?'#000':'#999'}}
                                        required={forms?.second?.requiredFields?.includes(field?._id) || false}
                                        onChange={(e) => handleInputChange1(field?.name, e.target.value)}
                                        label={field?.label}
                                        id="">
                                        <option value="" disabled selected>{`${field.label}`}</option>
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
                                    </div>
                                ) : (
                                    <input
                                        key={fieldIndex}
                                        type={field?.type}
                                        name={field?.name}
                                        style={{color:data1[field?.name]?'#000':'#999'}}
                                        onBlur={() => handleBlurWithError(field, data1)}
                                        placeholder={field.label}
                                        value={data1[field?.name] || ''}
                                        onChange={(e) => handleInputChange1(field?.name, e.target.value, field?.type)}
                                        required={forms?.second?.requiredFields?.includes(field?._id) || false}
                                    />
                                )}
                                {errors[field.name] && (
                                    <div style={{ color: 'red', margin: '0px 0px 5px 10px', fontSize: "12px" }}>
                                        {errors[field.name]}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='d-flex align-center mb-3'>
                            <input type="checkbox" name="" id="agr" required="required"></input>
                            <label for="agr">I agree to receive information regarding my submitted enquiry* </label>
                        </div>
                        <input style={{
                            marginTop: "22px"
                        }} type="submit" name="" value="Download Brochure" className='button' download></input>
                        {/* <p className="text-center"><a href="Vistacorner" type='submit' className='button' download >Download Brochure</a></p> */}
                    </form>
                </div>
            </div>
            {/* <ThankYouPage
                isOpen={thank}
                setIsOpen={setThank}
            /> */}
        </>
    )
}
export default Vistacorner;
