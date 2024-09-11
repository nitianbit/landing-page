import React, { useEffect, useState } from 'react'
import Form1Section from '../Forms/Form1Section'
import { useUserContext } from '../../context/UserContext';
import {CLIENTENDPOINTS} from './constant'
import { doGET } from '../../utils/HttpUtils';
import ClientAdvertisement from './ClientAdvertisement';
import ClientBusiness from './ClientBusiness';
import { clientData } from './data';
import AboutUs from './AboutUs';

const Client = () => {
  const { project, setProject } = useUserContext()
  const [form, setForm] = useState(null)
  const [data, setData] = useState(clientData)
  const getForm = async (projectId) => {
    try {
      const query = `type=client&projectId=${projectId}`;
      const response = await doGET(CLIENTENDPOINTS.getForm(query));
      // const formsArray = Array.from({ length: 3 }, (_, index) => response.find(form => form.formIndex === index) || []);

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
    <div x>
        <Form1Section  form={form} isFormNeeded={true}/>
        <ClientAdvertisement/>
        <ClientBusiness data={data}/>
        <AboutUs/>
    </div>
  )
}

export default Client
