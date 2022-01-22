import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { IconButton, Avatar } from '@mui/material';
import './Header.css';
import logo from './logo.jpg';

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(logout());
    })
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ion-icon name="menu-sharp"></ion-icon>
        </IconButton>

        <img src={logo} alt="" />
      </div>

      <div className="header__search">
        <IconButton>
          <ion-icon name="search-sharp"></ion-icon>
        </IconButton>

        <input placeholder="Search mail" type="text" />

        <IconButton>
          <ion-icon name="options-sharp"></ion-icon>
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <ion-icon name="help-circle-outline"></ion-icon>
        </IconButton>

        <IconButton>
          <ion-icon name="settings-sharp"></ion-icon>
        </IconButton>

        <IconButton>
          <ion-icon name="apps"></ion-icon>
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoURL} className="header__profile"></Avatar>
      </div>
    </div>
  );
}

export default Header;