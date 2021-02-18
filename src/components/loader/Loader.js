import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import loaderImage from '../../assets/images/loader.gif';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    message: {
        fontSize: '1.3rem',
        fontWeight: 600,
        textAlign: 'center',
    },
    loaderWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        zIndex: 99,
        ' & img': {
            width: '3rem',
            animation: 'zoomInOut 1s infinite',
            filter: 'drop-shadow(0 0 10px #007aff63)',
        },
    },
    loaderWrapperBg: {
        '&::after': {
            content: '',
            height: '100vh',
            width: '100%',
            backdropFilter: 'blur(8px)',
            position: 'absolute',
            zIndex: '-1',
        },
    },
    bg: {
        backgroundColor: (props) => props.bgcolor,
    },
});

const Loader = ({ initial = false }) => {
    const classes = useStyles();

    if (initial) {
        return (
            <div className={classNames(classes.loaderWrapper, classes.loaderWrapperBg, classes.bg)}>
                <img src={loaderImage} alt="" />
            </div>
        );
    } else {
        return <></>;
    }
};

Loader.propTypes = {
    initial: PropTypes.bool,
};

export default Loader;
