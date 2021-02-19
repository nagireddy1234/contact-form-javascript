import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { colors } from '../../theme/colors';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '1rem',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            maxWidth: '33%',
            marginLeft: 'auto',
            marginRight: 'auto',
            '@media (max-width:500px)': {
                padding: '18px',
                maxWidth: '75%',
            },
        },
        icon: {
            fontSize: '8rem',
            color: colors.green,
        },
        title: {
            fontSize: '1.3rem',
            lineHeight: '2.2rem',
            color: colors.black,
            textAlign: 'center',
            fontWeight: 100,
        },
    })
);

export const ModalComponent = ({ msg, handleClose, openOrNot, icon, children }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openOrNot}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openOrNot}>
                    <Grid container alignItems="center" direction="column" justify="center" className={classes.paper}>
                        {icon ? icon : <CheckCircle className={classes.icon} />}
                        <Typography className={classes.title}>{msg}</Typography>
                        {children}
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
};

ModalComponent.propTypes = {
    msg: PropTypes.string,
    handleClose: PropTypes.func,
    openOrNot: PropTypes.bool,
    icon: PropTypes.string,
    children: PropTypes.element,
};
export default ModalComponent;
