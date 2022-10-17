import './index.html';
import './style.less';
import ReactDOM from 'react-dom/client'
import React from 'react'
import {Router, Route, BrowserRouter} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import App from "./components/App";
import state from '/src/components/redux/state'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App appState={state}/>)