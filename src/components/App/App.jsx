import React from 'react';
import './App.css';

// import for project
import {Route, HashRouter as Router} from 'react-router-dom';
import '@fontsource/roboto';

// import components
import Header from '../Header/Header';
import Home from '../Home/Home';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      {/* Remove header and place in own component */}
      <Header />
      {/* Use Router to place routes */}
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
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

// export App
export default App;