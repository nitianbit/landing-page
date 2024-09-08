import React, { useEffect } from 'react'
import Form1 from './Form1'

const Form1Section = ({ form, handleSubmit, isFormNeeded=false }) => {
    return (
        <div className='flex flex-wrap ' >
            <div className={`w-full md:w-${isFormNeeded ? "7" : "10"}/10 border-b border-black`} style={{ maxHeight: "85vh" }}>
                <img
                    src="https://i.ibb.co/mvdqV88/Screenshot-2024-06-25-at-11-33-04-AM.png"
                    alt="Large description"
                    className="w-full h-full object-cover"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }} // Adjust for navbar height if needed
                />
            </div>

            {/* Form Section */}
           {isFormNeeded && <div className="w-full md:w-3/10 bg-[#f6f2ec] p-8 overflow-auto border-b border-black" style={{ maxHeight: "85vh" }}>
                <h2 className="text-2xl mb-6 p-4">Let's Find Your Dream Properties, Request a Callback</h2>
                <Form1 form={form} handleSubmit={handleSubmit} />
            </div>}
        </div>
    )
}

export default Form1Section
