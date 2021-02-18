import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import InputWithLabel from '../../components/inputs/InputWithLabel';
import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
import useSWR from 'swr';
import { industry } from '../../data/contact';
import TextArea from '../../components/inputs/TextArea';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: '1.5rem',
        width: '100%',
    },

    companyContainer: {
        width: '100%',
        paddingTop: '2rem',
    },

    fieldWrapper: {
        maxWidth: '25rem',
        margin: 'auto',
    },
    userDetailsContainer: {
        padding: '2rem 5rem',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '2rem',
        textAlign: 'center',
        '@media (max-width:649px)': {
            fontSize: '1rem',
            fontWeight: 600,
        },
    },
});

const CompanyInfo = ({ inputRegister, errors, getFullInfo }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="Company"
                    name="company"
                    // error={errors?.userName ? true : false}
                    // errorMsg={errors?.userName?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="Industry"
                    placeholder=""
                    name="industry"
                    // options={industry}
                    // onChange={handleDistrict}
                    // error={errors.state ? true : false}
                    // errorMsg={errors.state?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="Country"
                    placeholder="N/A"
                    name="country"
                    // options={country}
                    // onChange={handleDistrict}
                    // error={errors.state ? true : false}
                    // errorMsg={errors.state?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SelectWithLabelIcon
                    iscompulsory={false}
                    label="Operating geography"
                    placeholder="Operating geography"
                    name="operatingGeography"
                    // options={district}
                    // onChange={handleDistrict}
                    // error={errors.state ? true : false}
                    // errorMsg={errors.state?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextArea
                    iscompulsory={false}
                    label="What would you like to talk about?"
                    placeholder=""
                    name="message"
                    // options={district}
                    // onChange={handleDistrict}
                    // error={errors.state ? true : false}
                    // errorMsg={errors.state?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
        </>
    );
};

CompanyInfo.propTypes = {
    // inputRegister: PropTypes.func,
    // errors: PropTypes.object,
    // getFullInfo: PropTypes.func,
};

export default CompanyInfo;
