import React, { useEffect, useState } from 'react';
import './css/demo.css';
import './style.css';
import Header from './header';
import Footer from './footer';
import { CONTACTENDPOINTS } from '../components/contactUs/constant'
import { doGET } from '../utils/HttpUtils'
import { useUserContext } from '../context/UserContext'
import { handleSubmit } from '../components/handleSubmit';
import { validateFields } from '../utils/helper';


const Contactus = () => {
    const [form, setForm] = useState(null)
    const [data, setData] = useState({});
    const { project } = useUserContext()
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    const getForm = async (projectId) => {
        try {
            const query = `type=contact&projectId=${projectId}`
            const response = await doGET(CONTACTENDPOINTS.getContactForm(query));
            setForm(response);
        } catch (error) {
            console.error("Error fetching forms:", error);
        }
    };
    useEffect(() => {
        if (project) {
            getForm(project?._id)
        }
    }, [project])
    return (
        <>
            {/* banner section start */}
            <div className='contactUs'>
                <div className='d-flex bgs smd '>
                    <div className='lll full'>
                    </div>
                    <div className='rrr full'>
                    </div>
                </div>
                <div className='container d-flex align-center column'>
                    <div className='left full'>
                        <h1>Contact Us</h1>
                        <p>If you would like to know more details, feel
                            free to contact us. Our site representative will
                            give you a call back.
                        </p>
                        <h3>Address</h3>
                        <p>Apki Property <br />
                            Dwarka Sector 7 <br />
                            New Delhi - 110075 <br />
                            India</p>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday <br />10:00 AM - 06:00 PM</p>
                    </div>
                    <div className='right'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            const errorList = validateFields(form?.fields, data, setErrors);
                            if (Object.keys(errorList).length <= 0) {
                                handleSubmit({ e, form, formData: data, project }).then(res => {
                                    res && setData({})
                                })
                            } else {
                                setErrors(errorList)
                            }
                        }}>
                            <h4>Have Any Question?</h4>
                            {form?.fields?.map((field, index) => {
                                return (
                                    <div key={`${field?._id}-${index}`}>
                                        {
                                            <div key={index}>
                                                {
                                                    field?.type === "textarea" ? (
                                                        <textarea
                                                            // required={true}
                                                            required={form?.requiredFields?.includes(field?._id) || false}
                                                            value={data[field?.name] || ''}
                                                            onChange={(e) => handleInputChange(field?.name, e.target.value)}
                                                            id={field?.label.toLowerCase()}
                                                            cols="30"
                                                            rows="10"
                                                            placeholder={field?.label}
                                                        ></textarea>
                                                    ) : (
                                                        <input
                                                            // required={true}
                                                            required={form?.requiredFields?.includes(field?._id) || false}
                                                            value={data[field?.name] || ''}
                                                            onChange={(e) => handleInputChange(field?.name, e.target.value)}
                                                            type={field?.type}
                                                            id={field?.label.toLowerCase()}
                                                            placeholder={field?.label}
                                                        />
                                                    )
                                                }
                                                {errors[field.name] && (
                                                    <div style={{ color: 'white', margin: '0px 0px 5px 10px', fontSize: "12px" }}>
                                                        {errors[field.name]}
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            <input style={{
                                width: "60%",
                                textAlign: "center"
                            }} type="submit" name="" value="Schedule a Call" className='button'></input>
                        </form>
                    </div>
                </div>
            </div>
            {/* banner section end */}
        </>
    )
}
export default Contactus;
