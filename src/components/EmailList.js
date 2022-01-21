import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import './EmailList.css';
import EmailListSection from './EmailListSection';

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
    </div>
  );
}

export default EmailList;
