import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // user logged in
        dispatch(
          login({
            displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
          })
        );
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (<Header />) : ("")}
        
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
        )}
        
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
