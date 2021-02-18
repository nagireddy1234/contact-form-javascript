import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllcountriesAPIcall } from '../redux/actions/contactFormAction';
import { countrySelector } from '../redux/selectors/contactForm';

export const useCountries = () => {
    const dispatch = useDispatch();
    const countriesData = useSelector(countrySelector);
    const [countries, setCounties] = useState([]);

    useEffect(() => {
        dispatch(getAllcountriesAPIcall());
    }, []);

    useEffect(() => {
        if (countriesData) {
            const result = countriesData.map((item) => {
                return { value: item.name, label: item.name, flag: item.flag };
            });
            setCounties(result);
        }
    }, [countriesData]);

    return useMemo(() => {
        return countries;
    }, [countries]);
};
