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

// const postData = [
//     {name: 'Moon Killer', message: 'Tomorrow I will kill Sarah Connor, wish me luck', date: '23 sol'},
//     {name: 'Moon Killer', message: 'Thanks', date: '24 sol'},
// ]
//
//
// const dialogsData = [
//     {name:'Valera', id:'1'},
//     {name:'Dmitry', id:'2'},
//     {name:'Sveta', id:'3'},
//     {name:'Sasha', id:'4'},
// ]
//
//
// const messageData = [
//         {message:'Tomorrow I will kill Sarah Connor, wish me luck', id:'1'},
//         {message:'Hi', id:'2'},
//     ]
//





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App appState={state}/>)