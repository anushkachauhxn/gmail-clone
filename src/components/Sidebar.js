import React from 'react';
import { Button, IconButton } from '@mui/material';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
        <Button 
            className="sidebar__compose"
            startIcon={<CreateOutlinedIcon className="sidebar__composeIcon" />}
        >Compose</Button>

        <SidebarOption selected={true} title="Inbox" Icon={<ion-icon name="file-tray-sharp"></ion-icon>} number={144} />
        <SidebarOption title="Starred" Icon={<ion-icon name="star"></ion-icon>} />
        <SidebarOption title="Snoozed" Icon={<ion-icon name="time"></ion-icon>} />
        <SidebarOption title="Sent" Icon={<ion-icon name="send-sharp"></ion-icon>} />
        <SidebarOption title="Drafts" Icon={<ion-icon name="document"></ion-icon>} number={8} />
        <SidebarOption title="Archives" Icon={<ion-icon name="bookmark-sharp"></ion-icon>} number={5} />
        <SidebarOption title="More" Icon={<ion-icon name="chevron-down-sharp"></ion-icon>} />

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
