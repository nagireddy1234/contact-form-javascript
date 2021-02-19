import React from 'react';
import { colors } from '../../theme/colors';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        '& textarea': {
            width: '100%',
            padding: '8px',
            outline: 'none',
            margin: 0,
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'CircularXXWeb',
            backgroundColor: colors.white,
            color: (props) => (props.error ? `${colors.red}` : `${colors.black}`),

            border: (props) => `solid 1px ${props.error ? colors.red : colors.black}`,
            '&::placeholder': {
                color: (props) => (props.error ? `${colors.red}` : `${colors.black}`),
                fontSize: '0.875rem',
            },
        },
    },
});

const Input = ({ onChange, inputRegister, error, name, placeholder, ...rest }) => {
    const classes = useStyles({ error });
    return (
        <Box className={classes.wrapper}>
            <textarea
                className={classes.input}
                {...rest}
                error={error}
                name={name}
                placeholder={placeholder}
                ref={inputRegister}
                onChange={(e) => {
                    e.preventDefault();
                    onChange && onChange(e.target.value);
                }}
            />
        </Box>
    );
};

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.any,
    name: PropTypes.string,
};

export default Input;
