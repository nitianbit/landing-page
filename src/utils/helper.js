export const getUTMParameters = () => {
    const params = new URLSearchParams(window.location.search);
    const queryParameters = {};
    params.forEach((value, key) => {
        queryParameters[key] = value;
    });
    return queryParameters;
};

export const validateIndianMobileNumber = (mobileNumber)=> {
    const pattern = /^[6-9]\d{9}$/;
    return pattern.test(mobileNumber);
}

export const validateEmail = (email)=> {
    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
}

export const validateFields = (fields, data, setErrors) => {
    const errors = {};
    fields.forEach(field => {
        if (field.type === 'email' && !validateEmail(data[field.name])) {
            errors[field.name] = 'Invalid email address';
        }
        if (field.name === 'mobile' && !validateIndianMobileNumber(data[field.name])) {
            errors[field.name] = 'Invalid mobile number';
        }
    });
    return errors;
};
