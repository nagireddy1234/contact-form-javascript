import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { contactFormValidation } from '../../formValidation/userFormValidation';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import UserDetails from './UserDetails';
import { colors } from '../../theme/colors';
import ContactInfo from './ContactInfo';
import CompanyInfo from './CompanyInfo';
import CustomButton from '../../components/buttons/CustomButton';
import ModalComponent from '../../components/modal/ModalComponent';
import { toast } from 'react-toastify';
import Slide from 'react-reveal/Slide';
import TCNewsLetter from './TCNewsLetter';

const useStyles = makeStyles({
    rootWrapper: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: '1rem 5rem 0rem 5rem',
        '@media (max-width:649px)': {
            padding: '0',
        },
    },
    contactInfo: {
        display: 'flex',
        justifyContent: 'center',
    },
    formInfo: {
        '@media (max-width:649px)': {
            padding: '1rem 4rem',
        },
    },
    heading: {
        paddingLeft: '4.5rem',
        color: colors.white,
        fontSize: '2.75rem',
        fontWeight: '550',
        '@media (max-width:649px)': {
            fontSize: '1.5rem',
        },
    },
    userDetailsContainer: {
        padding: '1rem 4rem',
        '@media (max-width:649px)': {
            padding: '1rem',
        },
    },
    companyDetailsContainer: {
        padding: '1rem 4rem 0rem 4rem',
        '@media (max-width:649px)': {
            padding: '1rem 1rem',
        },
    },
    tcTitle: {
        fontSize: '1rem',
        color: colors.white,
        lineHeight: '1rem',
        '& a': {
            textDecoration: 'none',
            color: colors.darkRed,
        },
    },
    containerCheckBoxLabel: {
        marginBottom: '0.4rem',
    },
    checkBoxContainer: {
        width: '3rem',
    },
    labelContainer: {
        width: 'calc(100% - 3rem)',
    },
    button: {
        backgroundColor: colors.darkRed,
        width: '100%',
        height: '4rem',
        color: colors.white,
        borderRadius: 0,
        textTransform: 'capitalize',
        fontSize: '1.2rem',
        '&:hover': {
            backgroundColor: colors.darkRed,
        },
    },
});

const ContactUsForm = () => {
    const classes = useStyles();
    const [modal, setOpenModal] = useState(false);
    const [isTcAccepted, setIsTcAccepted] = useState(false);
    const [isNewsLetterAccepted, setIsNewsLetterAccepted] = useState(false);

    const { register, errors, handleSubmit, getValues } = useForm({
        resolver: yupResolver(contactFormValidation),
    });

    const submit =  (data) => {
        if (isTcAccepted) {
            console.log({...data, isNewsLetterAccepted});
            setOpenModal(true);
        } else {
            toast.error('Please accept the terms and conditions.');
        }
    };

    const handleTermsConditions = (e) => {
        setIsTcAccepted(e.target.checked);
    };

    const handleNewsLetter = (e) => {
        setIsNewsLetterAccepted(e.target.checked);
    };

    return (
        <>
            <ModalComponent
                msg="Thanks for your submission."
                openOrNot={modal}
                handleClose={() => setOpenModal(false)}
            />
            <Box className={classes.rootWrapper}>
                <Slide top duration={800}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.contactInfo}>
                            <ContactInfo />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classes.formInfo}>
                            <Typography className={classes.heading}>Contact us</Typography>
                            <form onSubmit={handleSubmit(submit)}>
                                <Grid container spacing={3} className={classes.userDetailsContainer}>
                                    <UserDetails inputRegister={register} getValues={getValues} errors={errors} />
                                </Grid>
                                <Grid container spacing={3} className={classes.companyDetailsContainer}>
                                    <CompanyInfo inputRegister={register} getValues={getValues} errors={errors} />
                                    <TCNewsLetter
                                        handleTConChange={handleTermsConditions}
                                        handleNewLetterOnchage={handleNewsLetter}
                                    />
                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                        <CustomButton label="Send" type="submit" className={classes.button} />
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Slide>
            </Box>
        </>
    );
};

export default ContactUsForm;
