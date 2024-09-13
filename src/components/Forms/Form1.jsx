/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { handleSubmit } from './FormHelper';
import { useUserContext } from '../../context/UserContext';

const Form1 = ({ form }) => {
    const [data, setData] = useState({});
    const {project} = useUserContext()
    const [loading, setLoading] = useState(false);
    const [phoneNo, setPhoneNo] = useState(null)


    const handleInputChange = (fieldName, value, type) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
        if ((type == "number" && (fieldName == "Phone" || fieldName == "phone")) ? value : null) {
            setPhoneNo((type == "number" && (fieldName == "Phone" || fieldName == "phone")) ? value : null)
        }
    };

    return (
        <form onSubmit={(e) => {
            // handleSubmit(e, formData = form, data, phoneNo).then(res => {
            //     res && setData({})
            // })
            handleSubmit({ e, form, formData: data, phone: phoneNo, project }).then(res => {
                    res && setData({})
                })
        }}>
            {form?.fields?.map((field, index) => {
                return field?.type === "select" ? (
                    <div className="mb-6" key={`${field?._id}-${index}`}>
                        <select
                            value={data[field?.label] || ''}
                            required={form?.requiredFields?.includes(field?._id) || false}
                            onChange={(e) => handleInputChange(field?.label, e.target.value)}
                            id={field?.label.toLowerCase()}
                            className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
                        >
                            <option>Select {field?.label}</option>
                            {field?.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="mb-6" key={`${field?._id}-${index}`}>
                        <input
                            value={data[field?.label] || ''}
                            onChange={(e) => handleInputChange(field?.label, e.target.value, field?.type)}
                            required={form?.requiredFields?.includes(field?._id) || false}
                            type={field?.type}
                            id={field?.label.toLowerCase()}
                            className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
                            placeholder={field?.label}
                        />
                    </div>
                );
            })}
            {/* <div className="mb-6 flex items-center">
                <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I agree to terms and conditions
                </label>
            </div> */}
            <Button
                text="Schedule a Call"
                type="submit"
                className="px-6"
            />
        </form>
    );
};

export default Form1;

