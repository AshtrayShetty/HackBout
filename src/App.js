import React from 'react';
import './App.css';
import Nav from './Nav'
import CreateAccount from './forms/CreateAccount'
import RemoveAccount from './forms/RemoveAccount'
import BoxLayout from './BoxLayout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={BoxLayout} />
            <Route path="/account/create" component={CreateAccount} />
            <Route path="/account/delete" component={RemoveAccount} />
          </Switch>
          <script src="https://kit.fontawesome.com/21641d8459.js" crossOrigin="anonymous"></script>
        </div>
      </Router>
  );
}

export default App;