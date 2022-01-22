import React from 'react';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { Button } from '@mui/material';
import './Login.css';
import logo from './google_logo.png';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                })
            );
        })
        .catch(err => alert(err));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="" />
                <h2>Sign in</h2>
                <p>to continue to Gmail</p>
                <Button 
                    className="login__google"
                    variant="contained"
                    startIcon={<ion-icon name="logo-google"></ion-icon>}
                    onClick={signIn}
                >Login with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
