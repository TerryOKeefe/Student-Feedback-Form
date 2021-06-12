import React from 'react';
import axios from 'axios';
import './App.css';

// import for project
import {Route, HashRouter as Router} from 'react-router-dom';

// import components
import Header from '../Header/Header';
import Home from '../Home/Home';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Submission from '../Submission/Submission';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/feeling">
          <FeelingForm />
        </Route>
        <Route path="/understanding">
          <UnderstandingForm />
        </Route>
        <Route path="/support">
          <SupportForm />
        </Route>
        <Route path="/comment">
          <CommentForm />
        </Route>
        <Route path="/review">
          <ReviewFeedback />
        </Route>
        <Route path="/submission">
          <Submission />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
