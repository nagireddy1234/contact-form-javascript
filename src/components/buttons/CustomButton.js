import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../../theme/colors';
import cn from 'classnames';

const useStyles = makeStyles({
    button: {
        width: (props) => (props.width ? props.width : 'auto'),
        padding: '0.4rem 0.7rem',
        backgroundColor: (props) => (props.backgroundColor ? props.backgroundColor : colors.green),
        borderRadius: 0,
        color: (props) => (props.color ? props.color : colors.white),
       
    },
});

const CustomButton = ({ label, width, color, externalClass, backgroundColor, ...rest }) => {
    const classes = useStyles({ width, color, backgroundColor });

    return (
        <Button className={cn(classes.button, externalClass)} {...rest}>
            {label}
        </Button>
    );
};

CustomButton.propTypes = {
    label: PropTypes.any,
    type: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string,
    color: PropTypes.string,
    externalClass: PropTypes.string,
    backgroundColor: PropTypes.string,
    variant: PropTypes.string
};

export default CustomButton;
