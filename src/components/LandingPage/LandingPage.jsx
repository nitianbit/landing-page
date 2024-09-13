import Home from '../Home.jsx';
import Form2 from '../Forms/Form2.jsx';
import { doGET, doPOST } from "../../utils/HttpUtils.js";
import {  useEffect, useState } from "react";
import { getUTMParameters } from "../../utils/helper.js";
import Cities from "../Cities/Cities.jsx";
import Form1Section from "../Forms/Form1Section.jsx";
import { useUserContext } from "../../context/UserContext.jsx";
import Service from "../OurServices/Service.jsx";
import Banner from "../../assets/home/Top Banner.png"

function LandingPage() {
  const { project, setProject } = useUserContext()
  const [forms, setForms] = useState(null)
  // const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(false);

  // const getForm = async (projectId) => {
  //   try {
  //     const query = `type=Form&projectId=${projectId}`;
  //     const response = await doGET(LandingPageENDPOINTS.getForm(query));
  //     // const formsArray = Array.from({ length: 3 }, (_, index) => response.find(form => form.formIndex === index) || []);

  //     setForms(response);
  //   } catch (error) {
  //     console.error("Error fetching forms:", error);
  //   }
  // };



  // const handleSubmit = async (e, form, formData, phone = null) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);

  //     const formId = form?._id;
  //     const values = Object?.keys(formData)?.map(label => ({
  //       fieldId: form?.fields?.find(field => field?.label === label)?._id,
  //       value: formData[label]
  //     }));

  //     const utmParameters = getUTMParameters();

  //     // Send form data to backend
  //     let response = await doPOST("/addFormValue", { formId, values, projectId: project?._id, utmParameters, ...(phone && { phone }) });

  //     // Handle response
  //     if (response.success) {
  //       console.log("Form submitted successfully:", response);
  //     } else {
  //       console.error("Error submitting form:", response.error);
  //     }
  //     return true
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     return false
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   if(project){
  //      getForm(project?._id)
  //   }
  // }, [project])
  return (
    <>
      <Form1Section src={Banner} />
      <Service/>
      {/* <Form2 form={forms} handleSubmit={handleSubmit} /> */}
      <Cities/>
      <Home  project={project} />
    </>
  );
}

export default LandingPage;
