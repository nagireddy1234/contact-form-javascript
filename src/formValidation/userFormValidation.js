import * as yup from 'yup';
export const contactFormValidation = yup.object().shape({
    firstName: yup.string().required('First name is a required field.'),
    email: yup.string().required('Email is a required field.'),
    company: yup.string().required('Company is a required field.'),
    industry: yup.string().required('Industry is a required field.'),
    country: yup.string().required('Country is a required field.'),
});
