import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        width: '400px',
        height: 407
    },
    bullet: {
        display: 'inline-block',
        margin: '0 9px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
    },
    hotelbox: {
        padding: '20px 10px',
        width: '100%',
        height: '80px',
        display: 'inline-block',
        backgroundColor: '#E6E6E6'
    },
    hotel: {
        fontWeight: '700',
        color: '#030F14',
        fontFamily: 'Popins',
        marginLeft: '15.5px',
    },
    hoteltype: {
        width: 152,
        height: 40,
        marginLeft: '13.55px'
    },
    detailbox: {
        positiosn: 'relative',
        width: 293,
        height: 193,
        backgroundColor: '#E6E6E6',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#26A9DE',
        width: 293,
        height: 44,
        marginTop: 30,
        marginBottom: 20,
        outline: 'none',
        border: 'none',
        color: 'white',
        borerRadius: '5px',
        fontWeight: '700',
        "&:hover": {
            backgroundColor: '#26A9DE',
            width: 293,
            height: 44,
            marginTop: 30,
            marginBottom: 20,
            color: 'white',
            borerRadius: '5px',
            fontWeight: '700',
        },
        "&:active": {
            border: 'none'
        },
        "&:visitied": {
            outline: 'none',
        }
    },
    adult: {
        marginTop: '14px',
        marginLeft: '10px',
        fontSize: '16px'
    },
    adultbox: {
        width: '131.75px',
        height: '40px',
        marginLeft: '10px'
    },
    child: {
        position: 'absolute',
        marginLeft: '92px',
        marginTop: '14px',
        fontSize: '16px',
    },
    childbox: {
        width: '131.75px',
        height: '40px',
        marginLeft: '10.35px',
    },
    age: {
        marginLeft: '10px',
        marginTop: '11px',
        fontWeight: '300',
    },
    agebox: {
        width: '40px',
        height: '40px',
        marginLeft: '10px',
        marginTop: '2px',
    }
});

export default function FlightInputCustomerNum() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {

        setOpen(false);
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="Flight Customers Number"
                PaperProps={{ sx: { width: "333px" } }}
            >
                <DialogContent>
                    <Card className={classes.hotelbox}>
                        <label className={classes.hotel}>Hotel Class
                            <select className={classes.hoteltype}>
                                <option>Any</option>
                                <option>1 star</option>
                                <option>2 stars</option>
                                <option>3 stars</option>
                                <option>4 stars</option>
                                <option>5 stars</option>
                            </select>
                        </label>
                    </Card>
                    <Card className={classes.detailbox}>
                        <label className={classes.adult}>Adults</label>
                        <label className={classes.child}>Childs</label> <br />
                        <select className={classes.adultbox}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <select className={classes.childbox}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <label className={classes.age}>Age Below 12 Years</label> <br />
                        <select className={classes.agebox}>
                            <option>11</option>
                            <option>10</option>
                            <option>9</option>
                            <option>8</option>
                            <option>7</option>
                            <option>6</option>
                            <option>5</option>
                        </select>
                    </Card>
                    <Button className={classes.button} onClick={handleAccept()}>DONE</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
