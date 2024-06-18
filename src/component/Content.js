import React, { useState, useEffect } from 'react';
import './style.css'
import HorizontalScroller from './HorizontalScroller';

const Content = ({ forms }) => {

    const [data, setData] = useState({});


    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    useEffect(() => {
        console.log(forms?.third)
    }, [])


    return (
        <>
            <HorizontalScroller />
            <div className="col-sm-12 col-md-4">
                <div className="card border border-light-subtle rounded-3 shadow-sm">
                    {/* <form onSubmit={handleSubmit}>
                            {forms?.firstForm?.fields?.map((field, index) => (
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
                                    <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Sign up'}
                                    </button>
                                </div>
                            </div>
                        </form> */}
                </div>
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


            <div className="row pt-4 my-md-5 pt-md-5 border-top">
                <div className='col-3'>
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
                </div>
                <div className="col-9 d-flex align-items-end">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Cool stuff</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Content;
