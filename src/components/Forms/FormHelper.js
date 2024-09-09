import { getUTMParameters } from "../../utils/helper";
import { doPOST } from "../../utils/HttpUtils";
import {FORMENDPOINSTS} from './constant.js'

export const handleSubmit = async ({e, form, formData, phone = null, project}) => {
    e.preventDefault();
    try {

      const formId = form?._id;
      const values = Object?.keys(formData)?.map(label => ({
        fieldId: form?.fields?.find(field => field?.label === label)?._id,
        value: formData[label]
      }));

      const utmParameters = getUTMParameters();

      // Send form data to backend
      let response = await doPOST(FORMENDPOINSTS.addFormValue, { formId, values, projectId: project?._id, utmParameters, ...(phone && { phone }) });

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
    }
  };
