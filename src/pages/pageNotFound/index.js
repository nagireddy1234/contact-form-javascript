import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import { useHistory } from 'react-router';
import CustomButton from '../../components/buttons/CustomButton';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: colors.white,
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
        color: colors.red,
        display: 'block',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: '5rem',
        padding: '3rem',
        '@media (max-width:565px)': {
            marginBottom: '2.5rem',
            fontSize: '2rem',
            pading: '1rem',
        },
    },
    btntitle: {
        fontSize: '1.3rem',
        color: colors.white,
        background: colors.primary,
        padding: '0.5rem 2rem',
        border: `1px solid transparent`,
        '@media (max-width:565px)': {
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
        '&:hover': {
            color: colors.primary,
            background: colors.white,
            border: `1px solid ${colors.primary}`,
        },
    },
});

const Notfound = () => {
    const route = useHistory();
    const classes = useStyles();
    const gotoHomePage = () => {
        route.push('/');
    };
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="center" className={classes.home}>
                <Typography className={classes.title}>404 - Page Not Found</Typography>
                <CustomButton label="Go To Home Page" onClick={gotoHomePage} className={classes.btntitle} />
            </Grid>
        </Box>
    );
};

export default Notfound;
