import React, { useState, useContext } from 'react';
import { LOGIN_DETAILS } from '../services/Storage';
import { AppContext } from '../services/context/AppContext';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { isLoggedIn, setIsLoggedIn, setUserData, baseUrl, setBaseUrl } = useContext(AppContext)

    const handleLogin = () => {
        // Check if the username and password are valid
        // const isValidUser = LOGIN_DETAILS?.some(user => user.username === username && user.password === password);
        const isValidUser = LOGIN_DETAILS.find(user => user.username === username && user.password === password);

        if (isValidUser) {
            setIsLoggedIn(true)
            setUserData(username)
            const newBaseUrl = baseUrl + isValidUser?.baseUrl
            setBaseUrl(newBaseUrl)
            console.log('User logged in successfully');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <section className="py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                                <div className="row gy-2 overflow-hidden">
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            <label htmlFor="username" className="form-label">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                            <label htmlFor="password" className="form-label">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid my-3">
                                            <button style={{
                                                backgroundColor: "#5D5FEF"
                                            }} className="btn poppins-black text-white btn-lg" type="button" onClick={handleLogin}>Log in</button>
                                        </div>
                                    </div>
                                    {error && <div className="col-12 text-danger">{error}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
