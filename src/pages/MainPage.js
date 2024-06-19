import React, { useContext, useEffect, useState } from 'react'
import { doGET, doPOST } from '../utils/HttpUtils'
import { AppContext } from '../services/context/AppContext'
import Header from '../component/Header'
import Content from '../component/Content'
import Bottom from '../component/Bottom'
const MainPage = () => {
    const [loading, setLoading] = useState(false);
    const [formNumberFields, setFormNumberFields] = useState({
        first: null,
        second: null,
        third: null,
    })
    const [formData, setFormData] = useState({
        number: null,
        values: null
    })

    const getForm = async () => {
        try {
            const response = await doGET("/project/666de33f3d5ee559944dd6ad/Forms");
            setFormNumberFields({
                first: response?.[0] ?? [],
                second: response?.[1] ?? [],
                third: response?.[2] ?? [],
            })
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    const handleSubmit = async (e, form, formData) => {
        e.preventDefault();
        try {
            setLoading(true);

            const formId = form?._id;
            const values = Object?.keys(formData)?.map(label => ({
                fieldId: form?.fields?.find(field => field?.label === label)?._id,
                value: formData[label]
            }));

            // Send form data to backend
            let response = await doPOST("/addFormValue", { formId, values, projectId: "666de33f3d5ee559944dd6ad" });

            // Handle response
            if (response.success) {
                console.log("Form submitted successfully:", response);
            } else {
                console.error("Error submitting form:", response.error);
            }
            return true
        } catch (error) {
            console.error("Error submitting form:", error);
            return false
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getForm()
    }, [])




    return (
        <div className='p-2'>
            <Header forms={formNumberFields} handleSubmit={handleSubmit} />
            <Content forms={formNumberFields} handleSubmit={handleSubmit} />
            <Bottom forms={formNumberFields} handleSubmit={handleSubmit} />
        </div>
    )
}

export default MainPage