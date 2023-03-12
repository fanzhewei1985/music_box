import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reducers from './reducers'
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(reducers, applyMiddleware(thunk))
root.render(
<Provider store={reduxStore}>
    <App />
    </Provider>
);
