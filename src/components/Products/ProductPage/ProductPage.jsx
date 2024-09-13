import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doGET, doPOST } from '../../../utils/HttpUtils'
import { getUTMParameters } from '../../../utils/helper'
import Form1Section from '../../Forms/Form1Section'
import './style.css'
import ProductPhotoSection from './ProductPhotoSection'
import ProductBasics from '../components/ProductBasics'
import { productData1, productData2 } from './data'
import Amenities from '../components/Amenities'
import LocationAdvantages from '../components/LocalAdvantages'
import Highlights from '../components/Highlights'
import AboutProject from '../components/AboutProject'
import AboutDeveloper from '../components/AboutDeveloper'

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(productData1)
    const [productData, setProductData] = useState(null)
    const [forms, setForms] = useState(null)

    const getProducts = async () => {
        try {
            const response = await doGET(`/product/${productId}`);
            setProductData(response)
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

    // const handleSubmit = async (e, form, formData, phone = null) => {
    //     e.preventDefault();
    //     try {
    //         // setLoading(true);
    //         const formId = form?._id;
    //         const values = Object?.keys(formData)?.map(label => ({
    //             fieldId: form?.fields?.find(field => field?.label === label)?._id,
    //             value: formData[label]
    //         }));

    //         const utmParameters = getUTMParameters();

    //         // Send form data to backend
    //         let response = await doPOST("/addFormValue", { formId, values, projectId: product?.parent, refererId: productId, utmParameters, ...(phone && { phone }) });

    //         // Handle response
    //         if (response.success) {
    //             console.log("Form submitted successfully:", response);
    //         } else {
    //             console.error("Error submitting form:", response.error);
    //         }
    //         return true
    //     } catch (error) {
    //         console.error("Error submitting form:", error);
    //         return false
    //     } finally {
    //         // setLoading(false);
    //     }
    // };
console.log({productId})
    useEffect(() => {
        if (productId && productId !== 'undefined') {
            setProduct(productData1)
        } else {
            setProduct(productData2)
        }
        if(productId){
            getProducts()
        }
    }, [productId])

    // useEffect(() => {
    //     if (!product) {
    //         getProducts()
    //     }
    // }, [product])

    // if (!product || !forms) {
    //     return <div>Loading ...</div>
    // }

    return (
        <>
            <Form1Section isFormNeeded={true} form={forms?.first} />
            <ProductBasics data={product} />
            <ProductPhotoSection images={product?.photos} title={product?.title}/>
            <Amenities amenities={product?.amenities} title={product?.title} />
            <LocationAdvantages locationData={product?.locationAdvantages} />
            <Highlights highlights={product.highlights} />
            <AboutProject {...product.about} title={product?.title} />
            <AboutDeveloper {...product.aboutDeveloper} developer={product?.developer}/>
        </>
    )
}

export default ProductPage
