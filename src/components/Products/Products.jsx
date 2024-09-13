import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { doGET } from '../../utils/HttpUtils';
import { useNavigate } from 'react-router-dom';
import universalSquare from '../../assets/home/hot-properties/Universal Square.png'
import vistaCorner from '../../assets/home/hot-properties/Vista Corner.png'
import ekamProsperityHomes from '../../assets/home/hot-properties/EKAM by Prosperity Homes.png'
import manshaAffordable from '../../assets/home/hot-properties/MANSHA Affordable.png'
import ProductCard from './ProductCard';

const data = [{
    heading1: "Universal Square By Auric",
    heading2: "Sector 79, Faridabad",
    heading3: "Commercial Offices/Shops",
    heading4: "Starting @45 Lakh*",
    src: universalSquare,
    onClick:(()=>{navigate(`/product/${products[0]?._id}`)})
},
{
    heading1: "Vista Corner",
    heading2: "Sector 89, Gurgaon",
    heading3: "Commercial Offices/Shops",
    heading4: "Starting @75 Lakh*",
    src: vistaCorner,
    onClick:(()=>{navigate(`/product/${products[1]?._id}`)})
},
{
    heading1: "EKAM by Prosperity Homes",
    heading2: "Velimela, Hyderabad",
    heading3: "Residential Apartments",
    heading4: "Starting @1.16 Crore*",
    src: ekamProsperityHomes,
    onClick:(()=>{})
},
{
    heading1: "MASNSHA Affordable",
    heading2: "Sector 104, Faridabad",
    heading3: "Residential Flats",
    heading4: "Starting @31.25 Lakh*",
    src: manshaAffordable,
    onClick:(()=>{})
}]


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
         {data?.map((item, index)=>{
            return <ProductCard heading1={item?.heading1} heading2={item?.heading2} heading3={item?.heading3} heading4={item?.heading4} src={item?.src} onClick={item?.onClick}/>
        })}
        </>
    )
}

export default Products
