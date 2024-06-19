import React, { useEffect, useState } from 'react';
import './style.css';

import img1 from '../images/image_7.jpeg';
import img2 from '../images/image_5.jpeg';
import img3 from '../images/image_6.jpeg';
import { doGET, doPOST } from '../utils/HttpUtils';

function Header({ forms, handleSubmit }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    return (
        <div className="row p-5 header-background">
            <div id="carouselExampleControls" className="carousel slide col-sm-12 col-md-8 h-100 mb-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" style={{
                            objectFit: "contain",
                            height: "500px",
                            width: "100%",
                        }} alt="img1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="img2" style={{
                            objectFit: "contain",
                            height: "500px",
                            width: "100%",
                        }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="img3" style={{
                            objectFit: "contain",
                            height: "500px",
                            width: "100%",
                        }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="col-sm-12 col-md-4">
                <div className="card border border-light-subtle rounded-3 shadow-sm">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                        <div>
                            {forms?.first?.fields?.map((field, index) => (
                                <div key={index} className="col-12">
                                    <div className="form-floating mb-3">
                                        {field.type === 'select' ? (
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
                            <div className="col-12">
                                <div className="d-grid my-3">
                                    <button onClick={(e) => {
                                        handleSubmit(e, forms?.first, data).then(res => {
                                            res && setData({})
                                        })
                                    }} className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Sign up'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
