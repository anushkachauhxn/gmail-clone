import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Mail.css';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}><ion-icon name="arrow-back-sharp"></ion-icon></IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton><ion-icon name="archive-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="alert-circle-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="trash-sharp"></ion-icon></IconButton>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <IconButton><ion-icon name="mail-unread-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="time-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="add-circle-sharp"></ion-icon></IconButton>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <IconButton><ion-icon name="log-out-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="albums-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="ellipsis-vertical-sharp"></ion-icon></IconButton>
                </div>

                <div className="mail__toolsRight">
                    <IconButton><ion-icon name="print-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="open-outline"></ion-icon></IconButton>
                    &nbsp;&nbsp;
                    <IconButton><ion-icon name="chevron-back-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="chevron-forward-sharp"></ion-icon></IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    
                    <div className="mail__bodySender">
                        <div className="mail__bodySenderLeft">
                            <Avatar></Avatar>
                            <h4>{selectedMail?.title}</h4>
                            <p>&lt;{selectedMail?.title}&gt;</p>
                        </div>
                        <div className="mail__bodySenderRight">
                            <p>{selectedMail?.time}</p>
                            <IconButton><ion-icon name="star-outline"></ion-icon></IconButton>
                            <IconButton><ion-icon name="arrow-undo-sharp"></ion-icon></IconButton>
                            <IconButton><ion-icon name="ellipsis-vertical-sharp"></ion-icon></IconButton>
                        </div>
                    </div>
                </div>

                <div className="mail__bodyMessage">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
