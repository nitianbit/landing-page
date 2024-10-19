import apiHandler from './apiHandler.js'
import { API_METHODS, STORAGE_KEYS, getValue } from './constants.js'

const token = getValue(STORAGE_KEYS.TOKEN);

export const doGET = async function (url) {
    try {
        const response = await apiHandler(url, API_METHODS.GET)
        return response;
    } catch (err) {
        console.log(err)
        throw new Error(err?.message);
    }
};

export const doPOST = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.POST, data)
        return response;
    } catch (err) {
        console.log(err)
        throw new Error(err?.message);
    }
};

export const doDELETE = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.DELETE, data)
        return response;
    } catch (err) {
        console.log(err)
        throw new Error(err?.message);
    }
};

export const doPUT = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.PUT, data)
        return response;
    } catch (err) {
        console.log(err)
        throw new Error(err?.message);
    }
}

