import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import {createStore} from 'redux';
import Reducers from "./reducers";
import { Provider } from "react-redux";


//ACTIONS 

//left top
// const leftTopBtnA = () => {
//     return {
//         type: 'LE_TO_BTN_A'
//     };
// };
// const leftTopBtnB = () => {
//     return {
//         type: 'LE_TO_BTN_B'
//     };
// };
// const leftTopBtnC = () => {
//     return {
//         type: 'LE_TO_BTN_C'
//     };
// };


// //left down
// const leftDownBtnA = () => {
//     return {
//         type: 'LE_DO_BTN_A'
//     };
// };
// const leftDownBtnB = () => {
//     return {
//         type: 'LE_DO_BTN_B'
//     };
// };
// const leftDownBtnC = () => {
//     return {
//         type: 'LE_DO_BTN_C'
//     };
// };


//right top 


//right down


//reducers

//store

let store = createStore(
    Reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   //redux dev tools
    );

//display store 
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch store
// store.dispatch(leftTopBtnA());







ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
