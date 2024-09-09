import React, { useEffect, useState } from 'react'
import { doGET, doPOST } from '../../utils/HttpUtils';
import ContactForm from './ContactForm';
import { CONTACTENDPOINTS } from './constant';
import { useUserContext } from '../../context/UserContext';
// import { handleSubmit } from '../Forms/FormHelper';

const Contact = () => {
    const [form, setForm] = useState(null)
    const { project } = useUserContext()
    const [loading, setLoading] = useState(false);

    const getForm = async (projectId) => {
        try {
            const query = `type=contact&projectId=${projectId}`
            const response = await doGET(CONTACTENDPOINTS.getContactForm(query));
            setForm(response);
        } catch (error) {
            console.error("Error fetching forms:", error);
        }
    };
    
    useEffect(() => {
        if(project){
            getForm(project?._id)
        }
    }, [project])

    return (
        <div id='contact-form'>
            <div className=" flex flex-col md:flex-row bg-gray-100">
                <div className="w-full md:w-1/2 bg-white py-12 px-8">
                    <h2 className="text-4xl font-bold mb-8 ">Contact Us</h2>
                    <p className="text-lg mb-6 ">
                        If you would like to know more details or something specific, feel free to contact us. Our site representative will give you a call back.
                    </p>
                    <div className="text-left">
                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                        <p className="mb-2">+91 84475 75752</p>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="mb-2">info@thekanproperties.com</p>
                        <h3 className="text-xl font-bold mb-2">Address</h3>
                        <p className="mb-2">Kan Infratech<br />Faridabad, Haryana India</p>
                        <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                        <p className="mb-2">Monday - Saturday 10:00 AM - 06:00 PM</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[#ffcd73] flex flex-col px-10 sm:px-0  py-12">
                    <h2 className="text-4xl font-bold mb-8 mx-auto">Have Any Question?</h2>
                    <div className="w-full max-w-lg mx-auto">
                        <ContactForm form={form}/>
                    </div>
                </div>
            </div>
            {/* <Footer container className='bg-black'>
        <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <Footer.Brand className='mx-8'
                    href="https://flowbite.com"
                    src="https://i.ibb.co/x7x4VQG/Screenshot-2024-06-27-at-1-20-25-PM.png"
                    alt="Flowbite Logo"
                />
                <Footer.Copyright by="Copyright@KanInfratech| thekanproperties.com.AllRightReserved." year={2024} />
            </div>
        </div>
    </Footer> */}
        </div>
    )
}

export default Contact
