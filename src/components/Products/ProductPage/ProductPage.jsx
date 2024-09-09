import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doGET, doPOST } from '../../../utils/HttpUtils'
import { getUTMParameters } from '../../../utils/helper'
import Form1Section from '../../Forms/Form1Section'
import './style.css'
import ProductPhotoSection from './ProductPhotoSection'
import AboutProduct from './AboutProduct'
import ProductOverView from './ProductOverView'

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
                first: response.forms?.length ? response.forms[0] : null,
                second: response.forms?.length > 1 ? response.forms[1] : null,
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
            let response = await doPOST("/addFormValue", { formId, values, projectId: product?.parent, refererId: productId, utmParameters, ...(phone && { phone }) });

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
            <Form1Section isFormNeeded={true} form={forms?.first} handleSubmit={handleSubmit} />
            <ProductPhotoSection/>
            <AboutProduct productName="Universal Square by Auric Group"/>
            <ProductOverView/>
        </>
    )
}

export default ProductPage
