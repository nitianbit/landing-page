import { createContext, useEffect, useState } from 'react';
import { STORAGE_KEYS, getValue } from '../Storage';

export const AppContext = createContext("");

export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [baseUrl, setBaseUrl] = useState(`https://jolex.s3.ap-south-1.amazonaws.com/`)



    // const getCurrentUser = async (e) => {
    //     try {
    //         const response = await doGET(ENDPOINTS.profile);
    //         setUserData(response?.data)
    //     } catch (error) { }
    // };

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const token = getValue(STORAGE_KEYS.TOKEN);
        if (token) {
            setIsLoggedIn(true);
            // getCurrentUser()
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                userData,
                setUserData,
                isLoggedIn, setIsLoggedIn,
                logout,
                baseUrl, setBaseUrl
            }}
        >
            {children}
        </AppContext.Provider>
    );
}