import React from 'react';
import { Checkbox, IconButton, Button } from '@mui/material';
import './EmailList.css';

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
    </div>
  );
}

export default EmailList;
