import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import InputWithLabel from '../../components/inputs/InputWithLabel';
import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
import { geography, industry } from '../../data/contact';
import TextArea from '../../components/inputs/TextArea';
import { useCountries } from '../../hooks/useCountries';
import CountrySelectInput from '../../components/inputs/CountrySelectInput';

const CompanyInfo = ({ inputRegister, errors }) => {
    const countries = useCountries();
    console.log(geography, industry);
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="Company"
                    name="company"
                    error={errors?.company ? true : false}
                    errorMsg={errors?.company?.message}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="Industry"
                    placeholder="Banking"
                    name="industry"
                    options={industry}
                    error={errors.industry ? true : false}
                    errorMsg={errors.industry?.message}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <CountrySelectInput
                    iscompulsory={true}
                    label="Country"
                    placeholder="N/A"
                    name="country"
                    isCountryType={true}
                    options={countries}
                    error={errors.country ? true : false}
                    errorMsg={errors.country?.message}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SelectWithLabelIcon
                    iscompulsory={false}
                    label="Operating geography"
                    placeholder="N/A"
                    name="geography"
                    options={geography}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextArea
                    iscompulsory={false}
                    label="What would you like to talk about?"
                    placeholder=""
                    name="message"
                    options={[]}
                    inputRegister={inputRegister}
                />
            </Grid>
        </>
    );
};

CompanyInfo.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
};

export default CompanyInfo;
