import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { colors } from '../../theme/colors';
import Spacing from './Spacing';

const useStyles = makeStyles({
    wrapper: {
        padding: '1rem',
        paddingTop: '6.5rem',
        '@media (max-width:649px)': {
            padding: '3rem 1rem 2rem 1rem',
        },
    },
    whiteLabel: {
        color: colors.white,
        fontWeight: 500,
        fontSize: '1.4rem',
    },
    redLabel: {
        color: colors.darkRed,
        fontWeight: 500,
        fontSize: '1.4rem',
    },
});

const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.whiteLabel}>Media enquiries:</Typography>
            <Typography className={classes.redLabel}>press@modularbank.co</Typography>
            <Spacing />
            <Typography className={classes.whiteLabel}>Career questions:</Typography>
            <Typography className={classes.redLabel}>careers@modularbank.co</Typography>
            <Spacing />
            <Typography className={classes.whiteLabel}>Our offices:</Typography>
            <Typography className={classes.whiteLabel}>Tallinn, Estonia</Typography>
            <Typography className={classes.whiteLabel}>Vabaduse Workland</Typography>
            <Typography className={classes.whiteLabel}>Pärnu mnt 12, 10146</Typography>
            <Spacing />
            <Typography className={classes.whiteLabel}>Berlin, Germany</Typography>
            <Typography className={classes.whiteLabel}>Bikini Berlin, Scaling Spaces, 2.OG</Typography>
            <Typography className={classes.whiteLabel}>Budapester Str. 46</Typography>
            <Typography className={classes.whiteLabel}>10787 Berlin</Typography>
        </Box>
    );
};

export default ContactInfo;
