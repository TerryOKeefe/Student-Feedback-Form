-- Setup --
    [x] - Create your data base and tables using provided database.sql
    [x] - npm install
    [x] - npm install react-redux
    [x] - npm install redux-logger
    [x] - npm install react-router-dom
    [x] - npm run server -- project working upon installs
        [x] - npm run client after server is up and running -- client working upon installs
    [x] - Make components
        [x] - index.js
            [x] - import {createStore, combineReducers, applyMiddleware} from 'redux';
            [x] - import {Provider} from 'react-redux';
            [x] - import logger from 'redux-logger';
            [x] - Create Store
                [x] - Wrap with combineReducers
                    [x] - Pass in reducers
                [x] - applyMiddleware
                    [x] - logger
            [x] - React.DOM.render
                [x] - React.StrictMode -- tool for highlighting potential problems
                [x] - Wrap the app in a `<Provider> and give the provider a store -> <Provider store={store}>`
                [x] - Service Worker -- provided for project
            [x] - App.jsx
                [x] - Import {Route, HashRouter as Router} from 'react-router-dom'
                [x] - Wrap the app in a <Router>
                [x] - Client
                    [x] - Make Routes through the different pages
                [x] - Admin -- STRETCH GOAL
                    [x] - Make Routes through the different pages
                    [x] - Route not shown nor button that leads to it

-- Wire Frame for each page/view
    [x] - Header -- Feedback!
        [x] - Under Header -- Don't Forget It!
    -- Welcome Page? --
        [x] - Brief description
        [x] - Start button -- should move the user to /feeling
    -- Add New Feedback --
        -- How are you feeling today? --
            [x] - /feeling route
            [x] - `<h2>How are you feeling today?</h2>`
            [x] - `<h4>Feeling?</h4>`
            [x] - Input field to take in a number
            [x] - Next button -- should move the user to /understanding
        -- How well are you understanding the content? --
            [x] - /understanding route
            [x] - `<h2>How well are you understanding the content?</h2>`
            [x] - `<h4>Understanding?</h4>`
            [x] - Input field to take in a number
            [x] - Next button -- should move the user to /support
        -- How well are you being supported? --
            [x] - /support route
            [x] - `<h2>How well are you being supported?</h2>`
            [x] - `<h4>Support?</h4>`
            [x] - Input field to take in a number
            [x] - Next button -- should move the user to /comment
        -- Any comments you want to leave? --
            [x] - /comment route
            [x] - `<h2>Any comments you want to leave?</h2>`
            [x] - `<h4>Comments</h4>`
            [x] - Input field to take in text
            [x] - Next button -- should move the user to /review
        -- Review Your Feedback --
            [x] - /review route
            [x] - `<h1>Review Your Feedback</h1>`
                [x] - <h3>Feelings: {input rating}
                [x] - <h3>Understanding: {input rating}
                [x] - <h3>Support: {input rating}
                [x] - <h3>Comments: {input comments}
            [x] - Submit button
                [x] - On submit send data to the database
                [x] - Send user to /submission route
        -- Save The Submission --
            [x] - /submission route
            [x] - <h1>Feedback!<h1>
            [x] - <h2>Thank You!</h2>
            [x] - Leave New Feedback button -- <button>Leave New Feedback</button>
                [x] - reset data and send user to home page

-- Extra Notes --
    [x] - No nav bar, each part of form should be its own route.
        [x] - Clicking next should move user to the appropriate step in the process
    [x] - Each step should only allow user to advance to the next step if a score was provided.
        [x] - Alert user that a value must be provided.
    [x] - Comment step does not need an alert.
        [x] - It can be empty if user chooses so.
    [x] - Review Component to allow user to review their feedback
        [x] - Users are not able to change their input on this step
        [x] - Users are not able to go back for base mode.
    [x] - Review step needs to have a submit button.
        [x] - This sends feedback to the server.
        [x] - On submit click save the data to the database.
        [x] - User should see a success page. /submission route
            [x] - Leave New Feedback button to reset form so user can do another submission




-- Stretch Goals --
    [x] - Base mode 100% DONE
    [ ] - Update Scores
        [ ] - Allow the user to go back to the previous step and change their score
            [ ] - Disallow empty values to do this part
    [x] - Styling
        [x] - Improve the styling using Material-UI
            [ ] - Cards?
            [ ] - Nav bar?
            [x] - Buttons
            [ ] - Icons
            [ ] - Theme
    [x] - Admin Section
        [x] - /admin route
            [x] - Display all existing feedback
            [x] - Most recent feedback should display on top of the list
            [ ] - Allow user to delete existing feedback
                [ ] - Alert user to confirm prior to deleting feedback from database
            [ ] - Ability to flag existing feedback entry for further review
    [ ] - Deploy Project
        [ ] - Deploy project to Heroku
            [ ] - Read instructions for building and deploying with React

-- Import For Styling --
    [ ] - Material UI ?
        [x] - npm install @material-ui/core
        [ ] - npm install @material-ui/icons
        [ ] - npm install @fontsource/roboto
            [ ] - import '@fontsource/roboto'
    [ ] - Bootstrap ?
        [ ] - npm install react-bootstrap bootstrap@4.6.0
