import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import for project
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';



// create store
const store = createStore(
    combineReducers({

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
