import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import { handleSubmit } from '../Forms/FormHelper';
import { useUserContext } from '../../context/UserContext';

const ContactForm = ({ form }) => {
    const {project} = useUserContext()
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (fieldName, value) => {
        setData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };
    return (
        <form className='' onSubmit={(e) => {
            handleSubmit({e, form, formData:data, project}).then(res => {
                res && setData({})
            })
        }}>
            {form?.fields?.map((field, index) => {
                return (
                    <div className="mb-6" key={`${field?._id}-${index}`}>
                        {field?.type === "textarea" ? (
                            <textarea
                                required={true}
                                value={data[field?.label] || ''}
                                onChange={(e) => handleInputChange(field?.label, e.target.value)}
                                id={field?.label.toLowerCase()}
                                rows="4"
                                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm"
                                placeholder={field?.label}
                            ></textarea>
                        ) : (
                            <input
                                required={true}
                                value={data[field?.label] || ''}
                                onChange={(e) => handleInputChange(field?.label, e.target.value)}
                                type={field?.type}
                                id={field?.label.toLowerCase()}
                                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm"
                                placeholder={field?.label}
                            />
                        )}
                    </div>
                );
            })}
            <Button
            text="Schedule a Call"
            style={{
                backgroundColor:'white',
                color:"black"
            }}
                type="submit"
                className="px-6"
            />
        </form>
    )
}

export default ContactForm
