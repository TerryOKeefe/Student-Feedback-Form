import React from 'react';
import axios from 'axios';
import './App.css';

// import for project
import {Route, HashRouter as Router} from 'react-router-dom';

// import components
import Home from '../Home/Home';
import FeelingForm from '../FeelingForm/FeelingForm';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/feeling">
          <FeelingForm />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
