import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import for project
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// feedback reducer
const feedbackReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FEELING' :
            return {...state, feeling: action.payload};
        case 'ADD_UNDERSTAND' :
            return {...state, understanding: action.payload};
        case 'ADD_SUPPORT' :
            return {...state, support: action.payload};
        case 'ADD_COMMENT' :
            return {...state, comments: action.payload};
        case 'SUBMISSION' :
            return state;
        default :
            return state;
    }
} // end feedbackReducer



// create store
const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>, 
    document.getElementById('root')
    );
registerServiceWorker();
