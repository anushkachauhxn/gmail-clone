import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import './EmailList.css';
import EmailListSection from './EmailListSection';
import EmailRow from './EmailRow';

function EmailList() {
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
            <EmailRow id="1" title="Elon" subject="AYOOOOO" description="Ayooooo" time="17:45" />
            <EmailRow id="2" title="Mark" subject="AYOOOOO" description="Ayooooo" time="17:45" />
            <EmailRow id="3" title="Joe" subject="AYOOOOO" description="Ayooooo" time="17:45" />
        </div>
    </div>
  );
}

export default EmailList;
