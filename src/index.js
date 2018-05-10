import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerLibrary from "@/reducer-library";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducerApp from "./reducer-app";
import reducersTest from "@/component/reducers-test"
let store=createStore(reducerLibrary);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();