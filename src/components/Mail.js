import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Mail.css';

function Mail() {
    const history = useHistory();

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
                    <h2>Reliance Jio is hiring for its Internship Program | Genpact, Springworks, Cargill India are also recruiting</h2>
                    
                    <div className="mail__bodySender">
                        <div className="mail__bodySenderLeft">
                            <Avatar></Avatar>
                            <h4>Sender</h4>
                            <p>&lt;senders@gmail.com&gt;</p>
                        </div>
                        <div className="mail__bodySenderRight">
                            <p>12:02pm</p>
                            <IconButton><ion-icon name="star-outline"></ion-icon></IconButton>
                            <IconButton><ion-icon name="arrow-undo-sharp"></ion-icon></IconButton>
                            <IconButton><ion-icon name="ellipsis-vertical-sharp"></ion-icon></IconButton>
                        </div>
                    </div>
                </div>

                <div className="mail__bodyMessage">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid placeat nisi excepturi aut cum laborum ea non vero expedita. Velit dolore totam quaerat, voluptatem omnis ex pariatur? Quasi, maiores?</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
