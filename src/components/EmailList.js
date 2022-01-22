import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import './EmailList.css';
import EmailListSection from './EmailListSection';
import EmailRow from './EmailRow';
import { db } from '../firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
            .orderBy("timestamp", "desc")
            .onSnapshot(
                (snapshot) => {
                    setEmails(snapshot.docs.map(
                        (doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        })
                    ));
                }
            );
    }, []);

    const getMailTiming = (timestamp) => {
        const date = new Date(timestamp?.seconds * 1000).toUTCString().slice(5, 11);
        const time = new Date(timestamp?.seconds * 1000).toUTCString().slice(17, 22);
        const currentDate = new Date().toUTCString().slice(5, 11);
        
        if (date === currentDate) {
            // today's mail - show time eg: 15:56
            return time;
        } else {
            // old mail - show date eg: Jan 22
            return date;
        }
    }

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton><ion-icon name="caret-down-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="refresh-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="ellipsis-vertical-sharp"></ion-icon></IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton><ion-icon name="chevron-back-sharp"></ion-icon></IconButton>
                    <IconButton><ion-icon name="chevron-forward-sharp"></ion-icon></IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <EmailListSection selected={true} title="Primary" Icon={<ion-icon name="file-tray-sharp"></ion-icon>} color="#DB4437" />
                <EmailListSection title="Social" Icon={<ion-icon name="people-sharp"></ion-icon>} color="#4285F4" />
                <EmailListSection title="Promotions" Icon={<ion-icon name="pricetag-sharp"></ion-icon>} color="#0F9D58" />
            </div>

            <div className="emailList__list">
                {emails.map((email) => (
                    <EmailRow 
                        id={email.id} 
                        title={email.data.to} 
                        subject={email.data.subject}
                        description={email.data.message}
                        time={getMailTiming(email.data.timestamp)}
                    />
                ))}
            </div>
        </div>
    );
}

export default EmailList;
