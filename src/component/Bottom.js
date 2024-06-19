import React, { useState } from 'react'

function Bottom({ forms, handleSubmit }) {

    const [data, setData] = useState({});
    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };


    return (
        <div className="row pt-4 my-md-5 pt-md-5 border-top">
            <div className='col-sm-6 col-12 d-flex justify-content-center'>
                <div className='col-6 pe-3'>
                    {forms?.third?.fields?.map((field, index) => (
                        <div key={index} className="col-12">
                            <div className="form-floating mb-3">
                                {field?.type === 'select' ? (
                                    <select
                                        className="form-select"
                                        value={data[field?.label] || ''}
                                        onChange={(e) => handleInputChange(field?.label, e.target.value)}
                                        name={field?.label}
                                        required={field?.required}
                                    >
                                        <option value="" disabled>Select {field?.label}</option>
                                        {field?.options.map((option, optIndex) => (
                                            <option key={optIndex} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        value={data[field?.label] || ''}
                                        onChange={(e) => handleInputChange(field?.label, e.target.value)}
                                        type={field?.type || 'text'}
                                        className="form-control"
                                        name={field?.label}
                                        placeholder={field?.label}
                                        required={field?.required}
                                    />
                                )}
                                <label htmlFor={field?.label} className="form-label">{field?.label}</label>
                            </div>
                        </div>
                    ))}
                    <div className='btn btn-primary '
                        onClick={(e) => {
                            handleSubmit(e, forms?.third, data).then(res => {
                                res && setData({})
                            })
                        }}>
                        Schedule a Meeting
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-12 d-flex flex-column justify-content-center">
                <div className="">
                    <h5>Features</h5>
                    <div>dfdfdfgdfgdfgd fgm,dgkjdb gfdvfnmbdvfjberevrne mevner</div>
                </div>
                <div>
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div>
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Team</a></li>
                        <li><a className="text-muted" href="#">Locations</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bottom