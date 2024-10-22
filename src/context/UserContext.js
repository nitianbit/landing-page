import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { doGET } from '../utils/HttpUtils';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [project, setProject] = useState(null);
    const [products, setProducts] = useState(null);
    const [domainName, setDomainName] = useState(null);

    const success = (message) => toast.success(message);
    const error = (message) => toast.error(message);


    const getProjectDomain = async () => {
        try {
            const response = await doGET(`/projectDomain?domain=${domainName}`);
            setProject(response)
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    const getProducts = async (projectId) => {
        try {
            const response = await doGET(`/getProductsByProject/${projectId}`);
            setProducts(response);
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    useEffect(() => {
        const domain = window?.location?.hostname.replace(/^www\./i, '');
        setDomainName(domain)
    }, [domainName])

    useEffect(() => {
        if(domainName){
            getProjectDomain()
        }
        if (project?._id) {
            getProducts(project?._id)
        }
    }, [project?._id, domainName]);

    const logout = () => {
        localStorage.clear();
        setLoggedIn(false);
        success("Logout Successfully");
    };

    const contextValue = {
        success,
        error,
        loggedIn,
        setLoggedIn,
        logout,
        user,
        setUser,
        project,
        setProject,
        products
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
