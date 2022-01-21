import React from 'react';
import { Button, IconButton } from '@mui/material';
import './Sidebar.css';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
        <Button 
            className="sidebar__compose"
            startIcon={<CreateOutlinedIcon className="sidebar__composeIcon" />}
        >Compose</Button>

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton><ion-icon name="person-sharp"></ion-icon></IconButton>
                <IconButton><ion-icon name="chatbubbles-sharp"></ion-icon></IconButton>
                <IconButton><ion-icon name="videocam-sharp"></ion-icon></IconButton>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
