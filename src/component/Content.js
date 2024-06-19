import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import './style.css'
import HorizontalScroller from './HorizontalScroller';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Content = ({ forms, handleSubmit }) => {

    const [data, setData] = useState({});


    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };


    return (
        <>
            <HorizontalScroller />
            <div>
                <Card className='px-3 py-3'>
                    <div className='row align-items-center'>
                        <div className='col-3'>
                            Start Your Property Purchase Journey Now
                        </div>
                        <div className='row col-9 d-flex align-items-center'>
                            {forms?.second?.fields?.map((field, index) => (
                                <div key={index} className="col-3">
                                    <div className="form-floating">
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
                            <div className='col-3 d-flex justify-content-end'>
                                <FaArrowAltCircleRight size={30} onClick={(e) => {
                                    handleSubmit(e, forms?.second, data).then(res => {
                                        res && setData({})
                                    })
                                }} />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="container bg-grey">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>

                <hr />
            </div>

        </>
    );
};

export default Content;
