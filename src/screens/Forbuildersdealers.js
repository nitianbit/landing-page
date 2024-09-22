import React, { useEffect, useState } from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import { CLIENTENDPOINTS } from '../components/clients/constant';
import { doGET } from '../utils/HttpUtils';
import { useUserContext } from '../context/UserContext';
import { handleSubmit } from '../components/handleSubmit';



const Forbuildersdealers = () => {
    const [popup, setPopup] = useState(false);
    const { project, setProject } = useUserContext()
    const [form, setForm] = useState(null)
    const [data, setData] = useState({})
    const [phoneNo, setPhoneNo] = useState(null)
    const getForm = async (projectId) => {
        try {
            const query = `type=client&projectId=${projectId}`;
            const response = await doGET(CLIENTENDPOINTS.getForm(query));
            // const formsArray = Array.from({ length: 3 }, (_, index) => response.find(form => form.formIndex === index) || []);

            setForm(response);
        } catch (error) {
            console.error("Error fetching forms:", error);
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
        if (project) {
            getForm(project?._id)
        }
    }, [project])
    return (
        <>
            <Header />
            {/* Sorting */}
            {/* banner section start */}
            <div className='builderDealerBanner column'>
                <div className='container full'>
                    <div className='left full'>
                        <h2>Boost Your Property Sales in India<br></br>
                            with High Quality Leads!</h2>
                        <p>Elevate your sales pipeline, close more deals, and drive <br></br>
                            your real estate business to new heights with our expert <br></br>
                            lead generation service.</p>
                    </div>
                    <div className='right'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            console.log("hey")
                                handleSubmit({ e, form, formData: data, phone: phoneNo, project }).then(res => {
                                    res && setData({})
                                })
                                setPopup(!popup)
                            }} id="Schedule">
                            <h4>GENERATE HIGH QUALITY LEADS FOR REAL  ESTATE.</h4>
                            <h4>TRY US NOW:</h4>
                            {form && form?.fields?.map((field, fieldIndex) => (
                                field?.type === "select" ? (
                                    <select
                                        key={fieldIndex}
                                        value={data[field?.name] || ''}
                                        name={field?.name}
                                        required={form?.requiredFields?.includes(field?._id) || false}
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
                                        required={form?.requiredFields?.includes(field?._id) || false}
                                    />
                                )
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
            <div className='aboutUs'>
                <div className='container'>
                    <h1>Advertise with Apki Property</h1>
                    <p className='Reach'>Reach out to Highly Interested Property Seekers</p>
                    <h3>ABOUT APKI PROPERTY</h3>

                    <ul>
                        <li>We are a Performance marketing powerhouse.</li>
                        <li>We generate Real Estate Leads that Converts.</li>
                        <li>Whether you’re looking to sell properties or reduce your lead acquisition costs, Apki Property is the ideal partner
                            to keep your pipeline full of quality leads.</li>
                        <li>As a 360-degree digital marketing agency, we empower our clients to build structured channels that effectively
                            reach their target audience while establishing a unique brand identity in the industry.
                        </li>
                        <li>
                            <b className='mb-2'>Our Numbers Speak for Themselves:</b>
                            <div className='d-flex mt-2'>
                                <span className='percent'>45%</span>
                                <div>
                                    <h4>Marketing Qualified Lead (MQL) Ratio of up to 45%</h4>
                                    <p>Including project inquiries, budget inquiries, and soft intent leads</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <span className='percent'>25%</span>
                                <div>
                                    <h4>Sales Qualified Lead (SQL) Ratio of up to 25%</h4>
                                    <p>Including project details, payment plans, inventory
                                        details, and future prospects
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <span className='percent'>15%</span>
                                <div>
                                    <h4>Site Visit Ratio of up to 15%</h4>
                                    <p>Translating interest into action with real-world
                                        property visits</p>
                                </div>
                            </div>
                        </li>
                        <li>We manage your complete performance marketing operations, delivering better results than an in-house team.</li>
                    </ul>
                    <h3>APKI PROPERTY SERVICES</h3>
                    <p>Are you struggling to generate high-quality leads for your real estate projects? You're not alone! We have the solution you've been
                        searching for.</p>
                    <h1>Why Choose Us?</h1>
                    <p>We specialize in providing targeted lead generation services designed exclusively for the Indian real estate market. Our strategies
                        are focused on connecting you with <b>serious buyers,</b> not just casual browsers. By delivering highly qualified leads, we help you
                        filter out irrelevant inquiries and engage with prospects who are genuinely interested in making a purchase.</p>
                    <p>not just casual browsers. By delivering highly qualified leads, we help you
                        filter out irrelevant inquiries and engage with prospects who are genuinely interested in making a purchase.<b> sales pipeline,</b>close <b> more deals</b> and take your real estate
                        business to the next level. Our team uses advanced tools and a data-driven approach to connect you with potential buyers who
                        are actively searching for properties. Every lead we generate has a high potential for conversion, tailored specifically to your
                        business needs.
                    </p>
                    <h3>Here’s How Our Service Transforms Your Real Estate Business:</h3>
                    <div class="wdd column">
                        <div class="sinService">
                            <div class="serIcon">
                                <img src="./images/sr1.png" alt="" />
                            </div>
                            <div class="serInfo">
                                <h4>Targeted Audience</h4>
                                <p>We use advanced data analysis
                                    to identify and reach out to
                                    buyers who are actively
                                    looking for properties, leads to
                                    sales maximisation.
                                </p>
                            </div>
                        </div>
                        <div class="sinService">
                            <div class="serIcon">
                                <img src="./images/sr2.png" alt="" />
                            </div>
                            <div class="serInfo">
                                <h4>Better Conversion Rates</h4>
                                <p>Your sales team can connect
                                    with buyers and focus on
                                    closing deals, boosting your
                                    conversion rates, and
                                    shortening your sales cycles</p>
                            </div>
                        </div>
                        <div class="sinService">
                            <div class="serIcon">
                                <img src="./images/sr3.png" alt="" />
                            </div>
                            <div class="serInfo">
                                <h4>Time and Cost Efficiency</h4>
                                <p>We filter out low-quality
                                    inquiries, allowing you to save
                                    valuable time and resources
                                    while focusing on highpotential prospects.</p>
                            </div>
                        </div>
                        <div class="sinService">
                            <div class="serIcon">
                                <img src="./images/sr4.png" alt="" />
                            </div>
                            <div class="serInfo">
                                <h4>Custom Solutions</h4>
                                <p>Whether you're selling
                                    residential, commercial, or
                                    luxury properties, our solutions
                                    are tailored to your unique
                                    needs.</p>
                            </div>
                        </div>
                    </div>
                    <h3>WHY CHOOSE APKI PROPERTY?</h3>
                    <p>We understand the intricacies of the Indian property landscape, and our proven approach delivers measurable results. Our
                        expertise ensures you'll experience a noticeable rise in qualified <b> Sales inquiries, Property visits,</b>and ultimately, more <b>Closed
                            Deals.</b></p>
                    <p>By focusing on high-quality leads, we help you connect with serious buyers who are ready to take action.</p>
                    <p>Whether you're a Real Estate Developer, Agent, or Consultant, our lead generation strategies are designed to give your business a
                        significant competitive advantage. With a <b> data-driven approach</b>and <b>customised solutions,</b>we ensure that every lead has the
                        potential to convert into a Successful Sale, Optimising your time and resources.</p>
                    <p>Our commitment to <b>time and cost efficiency</b>, combined with advanced tools, means you'll achieve better results, faster. Trust us
                        to deliver the edge your business needs to excel in today's competitive Real Estate environment.
                    </p>
                    <h3>TAKE THE FIRST STEP TODAY</h3>
                    <p>Are you ready to fill your sales pipeline with high-quality leads? Try our service now and experience the difference for yourself.
                        With our expert assistance, you’ll watch your property sales soar to new heights.</p>
                    <p>Don’t let your competitors outpace you—partner with us today, and start closing more deals!
                    </p>
                    <h3>CONTACT US NOW TO SUPERCHARGE YOUR REAL ESTATE BUSINESS.</h3>
                    <p><a href="#Schedule" className='button'>Schedule a Call</a></p>

                </div>
            </div>
            {/* section end */}
            {/* featuredProperties start */}
            <div className='newlyLaunched'>
                <div className='container'>
                    <h1 className='title pp'>POPULAR PROJECTS</h1>
                    <div className='properties'>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f1.png" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h5>Starting ₹79 Lakh*</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f2.png" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h5>Starting ₹79 Lakh*</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f3.png" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h5>Starting ₹79 Lakh*</h5>
                        </div>
                        <div className='singleProperties'>
                            <div className='imgBox'>
                                <img src="./images/f4.png" alt="" />
                            </div>
                            <h5>Universal Square</h5>
                            <h6>Sector 79, Faridabad</h6>
                            <p>Commercial</p>
                            <h5>Starting ₹79 Lakh*</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* featuredProperties end */}
            <p className='sch'><a href="#Schedule" className='button'>Schedule a Call</a></p>

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
            <Footer />
        </>
    )
}
export default Forbuildersdealers;
