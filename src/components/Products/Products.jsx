import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { doGET } from '../../utils/HttpUtils';
import { useNavigate } from 'react-router-dom';

const Products = ({ project }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null)
    const getProducts = async (projectId) => {
        try {
            const response = await doGET(`/getProductsByProject/${projectId}`);
            setProducts(response)
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    useEffect(() => {
        if (project?._id)
            getProducts(project?._id)
    }, [project?._id])
    return (
        <>
            <Card
                className="max-w-sm shadow-none border-none cursor-pointer"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://i.ibb.co/10YBYbg/Screenshot-2024-06-27-at-10-38-03-AM.png"
                onClick={() => navigate(`/product/${products[0]?._id}`)}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Universal Square By Auric
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    Independent SCO FLOORS Sector 79, Faridabad
                </p>
                <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
                    Starting @45 Lakh*
                </h3>
            </Card>
            <Card
                className="max-w-sm shadow-none border-none cursor-pointer"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://i.ibb.co/CKm1hMd/Screenshot-2024-06-27-at-10-38-19-AM.png"
                onClick={() => navigate(`/product/${products[1]?._id}`)}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    MANSHA ORCHID PLOTS
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    Gated Plot Township Sector 110, Faridabad

                </p>
                <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
                    Starting @45000/sq. yard.*
                </h3>
            </Card>
            <Card
                className="max-w-sm shadow-none border-none cursor-pointer"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://i.ibb.co/DgKfqC9/Screenshot-2024-06-27-at-10-38-30-AM.png"
                onClick={() => navigate(`/product/${products[2]?._id}`)}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">

                    MANSHA AFFORDABLE FLATS
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">

                    2BHK & 4BHK Flats Sector 104, Faridabad
                </p>
                <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
                    Starting @31.25 Lakh*
                </h3>
            </Card>
        </>
    )
}

export default Products