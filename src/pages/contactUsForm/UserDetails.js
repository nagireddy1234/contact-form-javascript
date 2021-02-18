import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import InputWithLabel from '../../components/inputs/InputWithLabel';

const UserDetails = ({ inputRegister, errors, getFullInfo }) => {
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="First name"
                    name="firstName"
                    error={errors?.firstName ? true : false}
                    errorMsg={errors?.firstName?.message}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel iscompulsory={false} label="Last name" name="lastName" inputRegister={inputRegister} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel
                    iscompulsory={true}
                    label="Email"
                    name="email"
                    error={errors?.email ? true : false}
                    errorMsg={errors?.email?.message}
                    inputRegister={inputRegister}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputWithLabel iscompulsory={false} label="Job title" name="jobTitle" inputRegister={inputRegister} />
            </Grid>
        </>
    );
};

UserDetails.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
    getFullInfo: PropTypes.func,
};

export default UserDetails;
