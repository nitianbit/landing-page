import React, { useEffect, useState } from 'react'
import NavbarComponent from '../Navbar'
import Contact from '../Contact'
import { useParams } from 'react-router-dom'
import { doGET, doPOST } from '../../utils/HttpUtils'
import { getUTMParameters } from '../../utils/helper'
import Form1Section from '../Forms/Form1Section'

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [forms, setForms] = useState(null)

    const getProducts = async () => {
        try {
            const response = await doGET(`/product/${productId}`);
            setProduct(response)
            // const formsArray = Array.from({ length: 3 }, (_, index) => response?.forms?.find(form => form.formIndex === index) || []);
             response?.forms?.sort((a, b) => a.formIndex - b.formIndex)
            setForms({
                first: response.forms?.length?response.forms[0]:null,
                second:  response.forms?.length>1?response.forms[1]:null,
                // third: response[2],
            });
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    const handleSubmit = async (e, form, formData, phone = null) => {
        e.preventDefault();
        try {
            // setLoading(true);
            const formId = form?._id;
            const values = Object?.keys(formData)?.map(label => ({
                fieldId: form?.fields?.find(field => field?.label === label)?._id,
                value: formData[label]
            }));

            const utmParameters = getUTMParameters();

            // Send form data to backend
            let response = await doPOST("/addFormValue", { formId, values,projectId:product?.parent, refererId: productId, utmParameters, ...(phone && { phone }) });

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
            // setLoading(false);
        }
    };

    useEffect(() => {
        if (!product) {
            getProducts()
        }
    }, [product])

    if (!product || !forms) {
        return <div>Loading ...</div>
    }
    return (
        <>
            <NavbarComponent />
            <Form1Section form={forms?.first} handleSubmit={handleSubmit} />
            <Contact form={forms?.third} handleSubmit={handleSubmit} />
        </>
    )
}

export default ProductPage