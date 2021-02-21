import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CustomCheckBox from '../../components/checkbox/customCheckBox';
import { colors } from '../../theme/colors';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
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
});

const TCNewsLetter = ({ handleTConChange, handleNewLetterOnchage }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Grid
                container
                alignItems="center"
                justify="flex-start"
                wrap="nowrap"
                className={classes.containerCheckBoxLabel}
            >
                <Box className={classes.checkBoxContainer}>
                    <CustomCheckBox onChange={handleTConChange} />
                </Box>
                <Box className={classes.labelContainer}>
                    <span className={classes.tcTitle}>
                        By submitting this form I accept privacy
                        <a> policy and cookie policy.</a> *
                    </span>
                </Box>
            </Grid>
            <Grid
                container
                alignItems="center"
                justify="flex-start"
                wrap="nowrap"
                className={classes.containerCheckBoxLabel}
            >
                <Box className={classes.checkBoxContainer}>
                    <CustomCheckBox onChange={handleNewLetterOnchage} />
                </Box>
                <Box className={classes.labelContainer}>
                    <span className={classes.tcTitle}>I would like to receive your newsletter.</span>
                </Box>
            </Grid>
        </Grid>
    );
};

TCNewsLetter.propTypes = {
    handleTConChange: PropTypes.func,
    handleNewLetterOnchage: PropTypes.func,
};

export default TCNewsLetter;
