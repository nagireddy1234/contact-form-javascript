import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
// import InputWithLabel from '../../components/InputWithLabel';
// import InputWithLabel from '../../components/inputs/InputWithLabel';
// import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
// import useSWR from 'swr';
// import { apiEndpoints } from '../../utility/apiEndpoints';
// import { fetcher, getAllBlocksAPIcall, getAllDistrictAPIcall } from '../../redux/actions/animalActions';
// import { dropdownFarmatter } from '../../helper/dropdownFarmatter';
// import { filterValueById } from '../../helper/filterValueById';
import InputWithLabel from '../../components/inputs/InputWithLabel';

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

const UserDetails = (
    {
        // inputRegister, errors, getFullInfo
    }
) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="First name"
                    name="firstName"
                    // error={errors?.firstName ? true : false}
                    // errorMsg={errors?.firstName?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={false}
                    label="Last name"
                    name="lastName"
                    // error={errors?.lastName ? true : false}
                    // errorMsg={errors?.lastName?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="Email"
                    name="email"
                    // error={errors?.email ? true : false}
                    // errorMsg={errors?.email?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={false}
                    label="Job title"
                    name="jobTitle"
                    // error={errors?.jobTitle ? true : false}
                    // errorMsg={errors?.jobTitle?.message}
                    // inputRegister={inputRegister}
                />
            </Grid>
            {/* </Box> */}
            {/* <SelectWithLabelIcon
                iscompulsory={true}
                label="आपका जिला"
                placeholder="जिला चुनें"
                name="district"
                options={district}
                onChange={handleDistrict}
                error={errors.state ? true : false}
                errorMsg={errors.state?.message}
                inputRegister={inputRegister}
            /> */}
        </>
    );
};

UserDetails.propTypes = {
    // inputRegister: PropTypes.func,
    // errors: PropTypes.object,
    // getFullInfo: PropTypes.func,
};

export default UserDetails;
