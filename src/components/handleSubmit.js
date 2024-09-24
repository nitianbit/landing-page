import { getUTMParameters } from "../utils/helper";
import { doPOST } from "../utils/HttpUtils";
import {FORMENDPOINSTS} from './constant.js'

export const handleSubmit = async ({e, form, formData, phone = null, project, productId=null}) => {
    e.preventDefault();
    try {

      const formId = form?._id;
      const values = Object?.keys(formData)?.map(name => ({
        fieldId: form?.fields?.find(field => field?.name === name)?._id,
        value: formData[name]
      }));

      const utmParameters = getUTMParameters();

      // Send form data to backend
      let response = await doPOST(FORMENDPOINSTS.addFormValue, { formId, values, projectId: project?._id,...(productId && {refererId: productId }), utmParameters, ...(phone && { phone }) });

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
