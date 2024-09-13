import React from 'react';
import { PRODUCTS } from './ProductPage/data';

const ProductCard = ({ product }) => {
    
    return <div className='mx-auto w-fit mb-10'>
        <div className="mx-4 p-8 md:mx-10 lg:mx-24 border max-w-screen-xl  bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/4 relative">
                    <img
                        src="https://www.w3schools.com/html/images/13_html_images.png"
                        alt="Copious Vista Corner"
                        className="w-50 h-50 object-cover rounded"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">
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
                {product?.about?.type=="string"?product?.about?.value:<div dangerouslySetInnerHTML={{ __html: product?.about?.value }} /> }
                <a href="#" className="text-purple-500 underline font-semibold">Read More</a>
                </p>

                <div className='flex justify-between'>
                    <div className="mt-6">
                        <p className="font-bold">Developer</p>
                        <p className="">{product?.developer}</p>
                    </div>

                    <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                        MORE DETAILS
                    </button>
                </div>

            </div>
        </div>
    </div>
}


const RealEstateListing = () => {
    return (
        <>
            <div className='mx-auto w-fit'>
                <div className="mx-4 p-8 md:mx-10 lg:mx-24 border max-w-screen-xl  bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/4 relative">
                            <img
                                src="https://www.w3schools.com/html/images/13_html_images.png"
                                alt="Copious Vista Corner"
                                className="w-50 h-50 object-cover rounded"
                            />
                            <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">
                                ZERO BROKERAGE
                            </div>
                        </div>
                        <div className="md:w-2/4 p-0  md:ps-6 pt-4 md:pt-0">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Copious Vista Corner</h2>
                            <p className="text-black-600 mb-2 font-medium text-lg">Sector 89, Gurgaon</p>
                            <p className="text-gray-700 mb-4">Commercial SCO Plots & Showrooms</p>
                            <p className="text-2xl font-bold text-gray-800 mb-6">Starting ₹79 Lakh*</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    {/* <Building2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Project Size</p>
                                        <p className="font-semibold">3.78 Acres</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <Building2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Total Units</p>
                                        <p className="font-semibold">395</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <FileCheck2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Legal Approval</p>
                                        <p className="font-semibold">HRERA & SEIAA</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <Stamp className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">RERA ID</p>
                                        <p className="font-semibold">GGM/634/366/2022/109</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="pt-4 ms-auto">
                        <p className="text-gray-700 mb-4 text-lg m-0 p-0">
                            Copious Vista Corner is an exciting Commercial Investment Opportunities to suit a range of budgets. For those seeking High Returns, it stands out as one of Gurgaon's most desirable commercial projects, providing properties with excellent visibility and significant foot traffic.
                            <a href="#" className="text-purple-500 underline font-semibold">Read More</a>
                        </p>

                        <div className='flex justify-between'>
                            <div className="mt-6">
                                <p className="font-bold">Developer</p>
                                <p className="">Copious Realtors Pvt. Ltd.</p>
                            </div>

                            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                                MORE DETAILS
                            </button>
                        </div>

                    </div>
                </div>
            </div>



            {/*second*/}
            <div className='mx-auto w-fit mt-10'>
                <div className="mx-4 p-8 md:mx-10 lg:mx-24 border max-w-screen-xl  bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/4 relative">
                            <img
                                src="https://www.w3schools.com/html/images/13_html_images.png"
                                alt="Copious Vista Corner"
                                className="w-50 h-50 object-cover rounded"
                            />
                            <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">
                                ZERO BROKERAGE
                            </div>
                        </div>
                        <div className="md:w-2/4 p-0  md:ps-6 pt-4 md:pt-0">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Copious Vista Corner</h2>
                            <p className="text-black-600 mb-2 font-medium text-lg">Sector 89, Gurgaon</p>
                            <p className="text-gray-700 mb-4">Commercial SCO Plots & Showrooms</p>
                            <p className="text-2xl font-bold text-gray-800 mb-6">Starting ₹79 Lakh*</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    {/* <Building2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Project Size</p>
                                        <p className="font-semibold">3.78 Acres</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <Building2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Total Units</p>
                                        <p className="font-semibold">395</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <FileCheck2 className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">Legal Approval</p>
                                        <p className="font-semibold">HRERA & SEIAA</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <Stamp className="w-6 h-6 mr-2 text-blue-500" /> */}
                                    <div>
                                        <p className="text-sm text-gray-500">RERA ID</p>
                                        <p className="font-semibold">GGM/634/366/2022/109</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="pt-4 ms-auto">
                        <p className="text-gray-700 mb-4 text-lg m-0 p-0">
                            Copious Vista Corner is an exciting Commercial Investment Opportunities to suit a range of budgets. For those seeking High Returns, it stands out as one of Gurgaon's most desirable commercial projects, providing properties with excellent visibility and significant foot traffic.
                            <a href="#" className="text-purple-500 underline font-semibold">Read More</a>
                        </p>

                        <div className='flex justify-between'>
                            <div className="mt-6">
                                <p className="font-bold">Developer</p>
                                <p className="">Copious Realtors Pvt. Ltd.</p>
                            </div>

                            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                                MORE DETAILS
                            </button>
                        </div>

                    </div>
                </div>
            </div>

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
