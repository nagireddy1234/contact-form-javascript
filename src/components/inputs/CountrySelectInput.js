import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { colors } from '../../theme/colors';
import ErrorMessage from '../errorMessage/ErrorMessage';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    wrapper: {
        width: '100%',
        outline: 'none',
        margin: 0,
        fontSize: '0.875rem',
        fontWeight: 400,
        backgroundColor: colors.white,
        border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.black}`),
        '&:focus': {
            borderColor: (props) => (props.error ? colors.red : colors.black),
        },
        '&:hover': {
            borderColor: (props) => (props.error ? colors.red : colors.black),
        },
    },
    iconContainer: {
        width: '10%',
        color: (props) => (props.error ? colors.red : colors.black),
    },
    label: {
        marginBottom: '0.2rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: colors.white,
    },
    inputContainer: {
        width: '100%',
        '&:focus': {
            outline: 'none',
        },
    },
    input: {
        position: 'relative',
        width: '100%',
        fontSize: '0.875rem',
        border: 'none',
        outline: 'none',
        padding: '0.35rem 0.6rem',
        color: colors.black,
        backgroundColor: colors.white,
        height: '2.2rem',
        cursor: 'pointer',
    },
    icon: {
        color: (props) => (props.error ? colors.red : colors.darkGray),
    },
    white: {
        color: colors.white,
    },
    optionContainer: {
        position: 'absolute',
        top: '2.2rem',
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        maxHeight: '15rem',
        overflowY: 'auto',
        border: `1px solid ${colors.lightGray2}`,
        zIndex: 1,
    },
    option: {
        cursor: 'pointer',
        padding: '0 1rem',
        '&:hover': {
            backgroundColor: colors.primary,
            color: colors.white,
        },
        '& img': {
            width: '1.5rem',
            height: '1rem',
        },
    },
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    },
    textStyles: {
        fontSize: '0.875rem',
    },
    expandIcon: {
        fontSize: '1.3rem',
        position: 'absolute',
        top: '0.5rem',
        right: 0,
    },
});
const CountrySelectInput = ({
    label,
    error,
    errorMsg,
    inputRegister,
    iscompulsory,
    placeholder,
    options,
    name,
    ...props
}) => {
    const classes = useStyles({ error });
    const [openSelection, setOpenSelection] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const handleOpenSelection = () => {
        setOpenSelection(!openSelection);
    };
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={classes.white}>*</span>}
            </Typography>
            <Grid
                container
                alignItems="center"
                justify="center"
                wrap="nowrap"
                component="div"
                tabIndex="0"
                className={classes.wrapper}
            >
                <input type="hidden" value={selectedCountry} name={name} ref={inputRegister} />
                <Box tabIndex={0} className={classes.inputContainer}>
                    <Box className={classes.input} error={error} onClick={handleOpenSelection} {...props}>
                        <Typography className={classes.textStyles}>
                            {selectedCountry !== '' ? selectedCountry : placeholder}
                        </Typography>
                        <ExpandMoreIcon className={classes.expandIcon} />
                        <Box
                            className={classnames(classes.optionContainer, openSelection ? classes.show : classes.hide)}
                        >
                            {options.map((item, i) => (
                                <Grid
                                    key={i}
                                    container
                                    alignItems="center"
                                    justify="space-between"
                                    wrap="nowrap"
                                    className={classes.option}
                                    onClick={() => handleCountrySelect(item.value)}
                                >
                                    <Typography>{item.label}</Typography>
                                    <img src={item.flag} alt="" />
                                </Grid>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <ErrorMessage errorMsg={errorMsg} />
        </Box>
    );
};

CountrySelectInput.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    name: PropTypes.string,
    inputRegister: PropTypes.func,
    errorMsg: PropTypes.object,
    options: PropTypes.array,
    iscompulsory: PropTypes.bool,
};
export default CountrySelectInput;
