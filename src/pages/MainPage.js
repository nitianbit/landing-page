import React, { useContext, useEffect, useState } from 'react'
import { doGET, doPOST } from '../utils/HttpUtils'
import { AppContext } from '../services/context/AppContext'
import Header from '../component/Header'
import Content from '../component/Content'
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const formId = formNumberFields?.[formData?.number]._id;
            const values = Object.keys(formData?.values).map(label => ({
                fieldId: formData?.values?.[formNumberFields]?.fields.find(field => field.label === label)._id,
                value: formData?.values[label]
            }));

            // Send form data to backend
            let response = await doPOST("/addFormValue", { formId, values, projectId: "666de33f3d5ee559944dd6ad" });

            // Handle response
            if (response.success) {
                console.log("Form submitted successfully:", response);
                setFormNumberFields({}); // Clear form data after successful submission
            } else {
                console.error("Error submitting form:", response.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getForm()
    }, [])




    return (
        <div className='p-2'>
            <Header forms={formNumberFields} />
            <Content forms={formNumberFields} />
        </div>
    )
}

export default MainPage