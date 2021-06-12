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
const feedbackReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FEELING' :
            return [...state, action.payload];
        case 'ADD_UNDERSTAND' :
            return [...state, action.payload];
        case 'ADD_SUPPORT' :
            return [...state, action.payload];
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
