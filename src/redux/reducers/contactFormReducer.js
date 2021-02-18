import { GET_ALL_COUNTRIES } from '../actionTypes/contactFormType';

const initialState = {
    countries: null,
};

export const contactFormReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_COUNTRIES: {
            newState.countries = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
