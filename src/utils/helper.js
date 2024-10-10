export const getUTMParameters = (inputKeys) => {
    const params = new URLSearchParams(window.location.search);
    const queryParameters = {};
    params.forEach((value, key) => {
        if (inputKeys.includes(key)) {
            queryParameters[key] = value;
        }
    });
    return queryParameters;
};

export const validateIndianMobileNumber = (mobileNumber)=> {
    const pattern = /^(\+?\d{1,3})?\s?\d{10,15}$/;
    return pattern.test(mobileNumber);
}

export const validateEmail = (email)=> {
    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
}

export const handleBlur = (field, data) => {
    const { name, type } = field;
    const value = data[name];
    let error = '';

    if (type === 'email' && !validateEmail(value)) {
        error = 'Invalid email address';
    }
    if ((["mobile","mobile_number"] .includes(name) || name == "tel")  && !validateIndianMobileNumber(value)) {
        error = 'Invalid mobile number';
    }

    // Return the error object with the field name as key
    return { [name]: error };
};


export const validateFields = (fields, data, setErrors) => {
    const errors = {};
    fields.forEach(field => {
        if (field.type === 'email' && !validateEmail(data[field.name])) {
            errors[field.name] = 'Invalid email address';
        }
        if ((["mobile","mobile_number"] .includes(field.name)  || field.name === "tel") && !validateIndianMobileNumber(data[field.name])) {
            errors[field.name] = 'Invalid mobile number';
        }
    });
    return errors;
};

export const downloadFile = async (filePath, fileName) => {
    const response = await fetch(filePath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
};
