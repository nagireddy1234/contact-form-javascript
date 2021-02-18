import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userFormValidationGenerator = (validationObj) => {
    const userFormValidation = yup.object().shape({
        userName: yup.string().required('User Name is a required field.'),
        phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').max(12),
        animal: yup.string().required('This is a required field.'),
        block_id: yup.string().required('This is a required field.'),
        state: yup.string().required('This is a required field.'),
        district: yup.string().required('This is a required field.'),
        ...validationObj,
    });

    return userFormValidation;
};
