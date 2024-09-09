import React, { useEffect, useState } from 'react'
import Form1Section from '../Forms/Form1Section'
import { useUserContext } from '../../context/UserContext';
import {CLIENTENDPOINTS} from './constant'
import { doGET } from '../../utils/HttpUtils';

const Client = () => {
  const { project, setProject } = useUserContext()
  const [form, setForm] = useState(null)
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
    <div>
        <Form1Section  form={form} isFormNeeded={true}/>
    </div>
  )
}

export default Client
