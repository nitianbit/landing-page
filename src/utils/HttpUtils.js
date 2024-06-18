import { STORAGE_KEYS, getValue } from "../services/Storage";
import apiHandler from "../services/api/apiHandler";
import { API_METHODS } from '../services/api/constants.js'

const token = getValue(STORAGE_KEYS.TOKEN);

export const doGET = async function (url) {
    try {
        const response = await apiHandler(url, API_METHODS.GET)
        return response;
    } catch (err) {
        throw new Error(err?.message);
    }
};

export const doPOST = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.POST, data)
        return response;
    } catch (err) {
        throw new Error(err?.message);
    }
};

export const doDELETE = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.DELETE, data)
        return response;
    } catch (err) {
        throw new Error(err?.message);
    }
};

export const doPUT = async function (url, data) {
    try {
        const response = await apiHandler(url, API_METHODS.PUT, data)
        return response;
    } catch (err) {
        throw new Error(err?.message);
    }
}

