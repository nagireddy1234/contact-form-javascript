import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../../theme/colors';
import ErrorMessage from '../errorMessage/ErrorMessage';
import cn from 'classnames';

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    wrapper: {
        width: '100%',
        outline: 'none',
        margin: 0,
        fontSize: '1rem',
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
        marginBottom: '0.4rem',
        fontSize: '0.85rem',
        fontWeight: 500,
        color: colors.white,
    },
    inputContainer: {
        width: '100%',
    },
    fistChild: {
        color: (props) => (props.error ? colors.red : colors.darkGray) + '!important',
    },
    input: {
        width: '100%',
        fontSize: '0.75rem',
        border: 'none',
        outline: 'none',
        padding: '0.6rem',
        color: colors.black,
        backgroundColor: colors.white,
        '& ::-ms-expand': {
            display: 'none',
        },
        '& option': {
            width: '50rem',
            backgroundColor: 'red',
            color: 'green',
        },
    },
    icon: {
        color: (props) => (props.error ? colors.red : colors.darkGray),
    },
    white: {
        color: colors.white,
    },
});
const SelectWithLabelIcon = ({
    label,
    error,
    errorMsg,
    inputRegister,
    iscompulsory,
    placeholder,
    options,
    isCountryType,
    ...props
}) => {
    const classes = useStyles({ error });
    console.log(options);
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
                <Box className={classes.inputContainer}>
                    <select ref={inputRegister} className={cn(classes.input)} error={error} {...props}>
                        {/* <option value="" hidden className={classes.fistChild}>
                            {placeholder}
                        </option> */}

                        {options.map((item, i) => (
                            <option key={i} value={item.value} className={classes.option}>
                                {item.label}
                                {/* {isCountryType ?<img src="https://restcountries.eu/data/afg.svg"/> : ''} */}
                            </option>
                        ))}
                    </select>
                </Box>
            </Grid>
            <ErrorMessage errorMsg={errorMsg} />
        </Box>
    );
};

SelectWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    name: PropTypes.string,
    inputRegister: PropTypes.any,
    errorMsg: PropTypes.object,
    options: PropTypes.array,
    iscompulsory: PropTypes.bool,
    isCountryType: PropTypes.bool,
};
export default SelectWithLabelIcon;
