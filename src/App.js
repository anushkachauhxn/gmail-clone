import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>5
      <div className="app">
        <Header />
        
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/">
              <EmailList />
            </Route>

            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
