import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import CustomButton from '../../components/buttons/CustomButton';
import { colors } from '../../theme/colors';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        height: '100vh',
        padding: '2rem',
        backgroundColor: colors.primary,
        '@media (max-width:649px)': {
            justifyContent: 'center',
            padding: '2rem',
        },
    },
    home: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        height: '100%',
    },
    title: {
        marginBottom: '2.5rem',
        fontSize: '5rem',
        color: colors.white,
        display: 'block',
        fontWeight: '700',
        textAlign: 'center',
        '@media (max-width:565px)': {
            marginBottom: '2.5rem',
            fontSize: '2rem',
            pading: '1rem',
        },
    },
    btntitle: {
        fontSize: '1.3rem',
        color: colors.primary,
        background: colors.white,
        padding: '0.5rem 2rem',
        border: `1px solid transparent`,
        '@media (max-width:565px)': {
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
        '&:hover': {
            color: colors.red,
            background: colors.primary,
            border: `1px solid ${colors.white}`,
        },
    },
});

const index = () => {
    const route = useHistory();
    const classes = useStyles();

    const gotoContactUsPage = () => {
        route.push('/contact-us');
    };

    return (
        <Zoom duration={500}>
            <Box className={classes.wrapper}>
                <Grid container alignItems="center" className={classes.home}>
                    <Typography className={classes.title}>Modularbank Contact-form Demo</Typography>
                    <CustomButton
                        label="Go To contact us page"
                        onClick={gotoContactUsPage}
                        className={classes.btntitle}
                    />
                </Grid>
            </Box>
        </Zoom>
    );
};

export default index;
