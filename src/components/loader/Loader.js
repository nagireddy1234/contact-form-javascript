import { images } from '../../assets/images/images';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    image: {
        width: '5rem',
    },
});

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <img src={images.loader} className={classes.image} />
        </div>
    );
};

export default Loader;
