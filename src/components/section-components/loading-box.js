import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './loading-box.css';

let logoUrl = process.env.PUBLIC_URL + "/" + "assets/img/others/new.png";

const LoadingBox = ({ open, onClose, timeout, url }) => {
    const [isOpen, setIsOpen] = useState(open);
    const history = useHistory();

    useEffect(() => {
        setIsOpen(open);
        if (open) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                onClose();
                history.push(url);
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [open, onClose, timeout, url, history]);

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <div className='loading-logo-wrap'>
                    <img className='logo' src={logoUrl} alt="site-logo.png" />
                </div>
                <div className='loading-logo-title'>
                    Give us a minute or two to find the best deals for you!
                </div>
                <div className='dots-wrap'>
                    <div className='p-dot1'></div>
                    <div className='p-dot2'></div>
                    <div className='p-dot3'></div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoadingBox;
