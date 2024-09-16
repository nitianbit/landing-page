import React from 'react'
import Form1 from './Form1'
import Button from '../Button/Button'
import Icons from '../../assets/home/icons.jpeg'
import { useNavigate } from 'react-router-dom'

const Form1Section = ({ form, isFormNeeded = false, src, heading, subheading, buttonText, productId=null }) => {
    const navigate = useNavigate()
    return (
        <div className="relative flex flex-col md:flex-row mb-5">
            <div className={`w-full md:w-${isFormNeeded ? "7" : "10"}/10 border-b border-black relative`} style={{ maxHeight: "85vh" }}>
                <img
                    src={src}
                    alt="Large description"
                    className="w-full h-full object-cover"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }} // Adjust for navbar height if needed
                />

                {/* Overlay Text */}
                {(heading || subheading || buttonText) && (
                    <div className="absolute inset-0 flex flex-col mt-2 md:mt-28 items-center text-white px-4">
                        {heading && (
                            <h1 className="text-md md:text-5xl font-bold mb-4 text-center">
                                {/* Handling the line break in heading */}
                                THINKING OF BUYING YOUR <br /> HOME OR OFFICE?
                            </h1>
                        )}
                        {subheading && (
                            <h2 className="text-xs md:text-2xl mb-6 px-4 py-2 border border-white rounded-full text-center">
                                {subheading}
                            </h2>
                        )}
                        {buttonText && (
                            <Button
                                className="px-4 py-2 text-lg md:text-xl font-rasputin"
                                text={buttonText}
                                onClick={() => navigate("/contact-us")}
                            />
                        )}
                    </div>
                )}

                {/* Logo at the bottom right */}
                <div className="absolute bottom-1 right-5 w-20 h-20 flex items-center justify-center">
                    <img
                        src={Icons}
                        alt="Logo"
                        className="w-full h-full object-contain" // Ensures logo maintains aspect ratio
                    />
                </div>
            </div>

            {isFormNeeded && (
                <div className="w-full md:w-3/10 bg-[#f6f2ec] p-8 overflow-auto border-b border-black" style={{ maxHeight: "85vh" }}>
                    <h3 className="text-xl mb-6 p-4">GENERATE HIGH QUALITY LEADS FOR REAL ESTATE</h3>
                    <Form1 form={form} productId={productId}/>
                </div>
            )}
        </div>
    )
}

export default Form1Section
