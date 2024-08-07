import { Footer } from "flowbite-react";
import NavbarComponent from '../Navbar.jsx'
import Home from '../Home.jsx';
import Form2 from '../Forms/Form2.jsx';
import AboutUs from "../AboutUs.jsx";
import Contact from "../Contact.jsx";
import { doGET, doPOST } from "../../utils/HttpUtils.js";
import { useEffect, useState } from "react";
import { getUTMParameters } from "../../utils/helper.js";
function LandingPage() {
  const [forms, setForms] = useState(null)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(false);

  const getForm = async (projectId) => {
    try {
      const response = await doGET(`/project/${projectId}/Forms`);
      response.sort((a, b) => a.formIndex - b.formIndex)

      // const formsArray = Array.from({ length: 3 }, (_, index) => response.find(form => form.formIndex === index) || []);

      setForms({
        first: response[0],
        second: response[1],
        third: response[2],
      });
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };


  const getProjectDomain = async () => {
    try {
      const response = await doGET(`/projectDomain?domain=${window?.location?.hostname}`);
      setProject(response)
      getForm(response?._id)
    } catch (error) {
      console.error("Error fetching form:", error);
    }
  };

  const handleSubmit = async (e, form, formData, phone = null) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formId = form?._id;
      const values = Object?.keys(formData)?.map(label => ({
        fieldId: form?.fields?.find(field => field?.label === label)?._id,
        value: formData[label]
      }));

      const utmParameters = getUTMParameters();

      // Send form data to backend
      let response = await doPOST("/addFormValue", { formId, values, projectId: project?._id, utmParameters, ...(phone && { phone }) });

      // Handle response
      if (response.success) {
        console.log("Form submitted successfully:", response);
      } else {
        console.error("Error submitting form:", response.error);
      }
      return true
    } catch (error) {
      console.error("Error submitting form:", error);
      return false
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getProjectDomain()
  }, [])
  return (
    <>
      <NavbarComponent />
      <Home form={forms?.first} project={project} handleSubmit={handleSubmit} />
      <Form2 form={forms?.second} handleSubmit={handleSubmit} />
      <AboutUs />
      <Contact form={forms?.third} handleSubmit={handleSubmit} />
    </>
  );
}

export default LandingPage;
