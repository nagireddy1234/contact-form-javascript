import Axios from 'axios';
import { GET_ALL_COUNTRIES } from '../actionTypes/contactFormType';

export const getAllcountriesAPIcall = () => {
    return (dispatch) => {
        Axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                dispatch(getAllcountriesRes(res.data));
            })
            .catch((err) => {
                return err;
            });
    };
};

const getAllcountriesRes = (data) => {
    return {
        type: GET_ALL_COUNTRIES,
        payload: data,
    };
};
