import React, { useEffect } from 'react'
import Form1 from './Form1'

const Form1Section = ({ form, isFormNeeded=false, src }) => {
    return (
        <div className='flex flex-col md:flex-row mb-5' >
            <div className={`w-full md:w-${isFormNeeded ? "7" : "10"}/10 border-b border-black`} style={{ maxHeight: "85vh" }}>
                <img
                    src={src}
                    alt="Large description"
                    className="w-full h-full object-fill"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }} // Adjust for navbar height if needed
                />
            </div>
           {isFormNeeded && <div className="w-full md:w-3/10 bg-[#f6f2ec] p-8 overflow-auto border-b border-black" style={{ maxHeight: "85vh" }}>
                <h3 className="text-xl mb-6 p-4">GENERATE HIGHT QUALITY LEADS FOR REAL ESTATE</h3>
                <Form1 form={form}  />
            </div>}
        </div>
    )
}

export default Form1Section
