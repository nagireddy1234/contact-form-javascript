import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { userFormValidationGenerator } from '../../formValidation/userFormValidation';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import UserDetails from './UserDetails';
// import { createUser } from '../../helper/createUser';
// import { useHistory } from 'react-router';
import { colors } from '../../theme/colors';
// import { getLocation } from '../../helper/getLattitudeLongitude';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';

const useStyles = makeStyles({
    rootWrapper: {
        backgroundColor: colors.primary,
    },
    wrapper: {
        width: '100%',
    },
    userDetailsContainer: {
        padding: '2rem 5rem',
    },
    companyDetailsContainer: {
        padding: '1rem 5rem',
    },
    heading: {
        paddingLeft: '4.5rem',
        color: colors.white,
        '@media (max-width:649px)': {
            fontSize: '1rem',
        },
    },
    subHeading: {
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: 500,
        paddingBottom: '1rem',
        '@media (max-width:649px)': {
            fontSize: '0.8rem',
        },
    },
});

const UserForm = () => {
    const classes = useStyles();
    // const [validation, setValidation] = useState({});
    // const { register, errors, handleSubmit, getValues, reset } = useForm({
    //     resolver: yupResolver(userFormValidationGenerator(validation)),
    // });

    // const submit = async (data) => {
    //     await createUser(
    //         data,
    //         imagesUploaded,
    //         setImagesUploaded,
    //         reset,
    //         setImageThumbnail,
    //         imagesLinks,
    //         moreInfo,
    //         history
    //     );
    // };

    return (
        <>
            <Box className={classes.rootWrapper}>
                <Box className={classes.wrapper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <ContactInfo />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Typography variant="h2" className={classes.heading}>
                                Contact us
                            </Typography>

                            <form
                            // onSubmit={handleSubmit(submit)}
                            >
                                <Grid container spacing={3} className={classes.userDetailsContainer}>
                                    <UserDetails
                                    // inputRegister={register}
                                    // getValues={getValues}
                                    // getFullInfo={handleFullInfo}
                                    // errors={errors}
                                    />
                                </Grid>
                                <Grid container spacing={3} className={classes.companyDetailsContainer}>
                                    <CompanyInfo
                                    // inputRegister={register}
                                    // getValues={getValues}
                                    // getFullInfo={handleFullInfo}
                                    // errors={errors}
                                    />
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default UserForm;
