import React from 'react';
import { PRODUCTS } from './ProductPage/data';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';


const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    
    return <div className='mx-auto w-fit mb-10'>
        <div className="  p-8  border   bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/4 relative">
                    <img
                        src={product?.src}
                        alt="Copious Vista Corner"
                        className="w-50 h-50 object-cover rounded"
                    />
                    <div className="absolute top-4 right-20 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">
                        ZERO BROKERAGE
                    </div>
                </div>
                <div className="md:w-2/4 p-0  md:ps-6 pt-4 md:pt-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{product?.title}</h2>
                    <p className="text-black-600 mb-2 font-medium text-lg">{product?.location}</p>
                    <p className="text-gray-700 mb-4">{product?.description}</p>
                    <p className="text-2xl font-bold text-gray-800 mb-6">{product?.startingPrice}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {product?.overviewItems?.map((item, index) => (
                            <div key={index} className="flex items-center">
                                {/* <Building2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                <div>
                                    <p className="text-sm text-gray-500">{item.title}</p>
                                    <p className="font-semibold">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="pt-4 ms-auto">
                <p className="text-gray-700 mb-4 text-lg m-0 p-0">
                    {product?.about?.type == "string" ? product?.about?.value : <div dangerouslySetInnerHTML={{ __html: product?.about?.value }} />}
                    <div onClick={() => {
                        navigate(`${product?._id}`)
                    }} className="text-purple-500 underline font-semibold cursor-pointer">Read More</div>
                </p>

                <div className='flex justify-between'>
                    <div className="mt-6">
                        <p className="font-bold">Developer</p>
                        <p className="">{product?.developer}</p>
                    </div>
                    <Button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300" text="More Details" onClick={() => {
                        navigate(`${product?._id}`)
                    }} />
                </div>

            </div>
        </div>
    </div>
}


const RealEstateListing = () => {
    return (
        <>
            {
                PRODUCTS.map((item, index) => {
                    return (
                        <ProductCard key={index} product={item} />
                    )
                })
            }


        </>


    );
};

export default RealEstateListing;
