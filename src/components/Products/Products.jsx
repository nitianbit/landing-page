import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { doGET } from '../../utils/HttpUtils';
import { useNavigate } from 'react-router-dom';
import universalSquare from '../../assets/home/hot-properties/Universal Square.png';
import vistaCorner from '../../assets/home/hot-properties/Vista Corner.png';
import ekamProsperityHomes from '../../assets/home/hot-properties/EKAM by Prosperity Homes.png';
import manshaAffordable from '../../assets/home/hot-properties/MANSHA Affordable.png';
import ProductCard from './ProductCard';

const getData = (products, navigate) => [
    {
        heading1: "Universal Square By Auric",
        heading2: "Sector 79, Faridabad",
        heading3: "Commercial Offices/Shops",
        heading4: "Starting @45 Lakh*",
        src: universalSquare,
        onClick: () => { navigate(`/product/${products[0]?._id}`); }
    },
    {
        heading1: "Vista Corner",
        heading2: "Sector 89, Gurgaon",
        heading3: "Commercial Offices/Shops",
        heading4: "Starting @75 Lakh*",
        src: vistaCorner,
        onClick: () => { navigate(`/product/${products[1]?._id}`); }
    },
    {
        heading1: "EKAM by Prosperity Homes",
        heading2: "Velimela, Hyderabad",
        heading3: "Residential Apartments",
        heading4: "Starting @1.16 Crore*",
        src: ekamProsperityHomes,
        onClick: () => {}
    },
    {
        heading1: "MASNSHA Affordable",
        heading2: "Sector 104, Faridabad",
        heading3: "Residential Flats",
        heading4: "Starting @31.25 Lakh*",
        src: manshaAffordable,
        onClick: () => {}
    }
];

const Products = ({ project }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);

    const getProducts = async (projectId) => {
        try {
            const response = await doGET(`/getProductsByProject/${projectId}`);
            setProducts(response);
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    useEffect(() => {
        if (project?._id) {
            getProducts(project?._id);
        }
    }, [project?._id]);

    return (
        <>
            {products?.length && getData(products, navigate)?.map((item, index) => {
                return (
                    <ProductCard 
                        key={index} 
                        heading1={item?.heading1} 
                        heading2={item?.heading2} 
                        heading3={item?.heading3} 
                        heading4={item?.heading4} 
                        src={item?.src} 
                        onClick={item?.onClick} 
                    />
                );
            })}

            {/* Bottom sticky bar for mobile view */}
            <div className="mobile-sticky-bar" onClick={() => navigate('/schedule-call')}>
                Schedule a Call
            </div>

            {/* Styles for the sticky bar */}
            <style jsx>{`
                .mobile-sticky-bar {
                    display: none;
                }

                @media (max-width: 768px) {
                    .mobile-sticky-bar {
                        display: block;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: #64506B;
                        color: #fff;
                        padding: 15px 0;
                        text-align: center;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
                    }
                }
            `}</style>
        </>
    );
};

export default Products;
