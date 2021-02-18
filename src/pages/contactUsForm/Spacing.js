import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    spacing: {
        padding: '1.5rem',
    },
});

const Spacing = () => {
    const classes = useStyle();
    return <div className={classes.spacing}></div>;
};

export default Spacing;
