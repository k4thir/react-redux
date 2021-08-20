import React, { Component } from "react";
import "./App.css";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";
import { useSelector ,useDispatch} from "react-redux";
import {leftTopBtnA} from './actions/index'

// class App extends Component {
    
    // render() {
function App(){
        const TitleChangerLD = useSelector( state => state.TitleChangerLD);
        // const dispatch = useDispatch(function)
        return (
            <div
                style={{
                    display: "flex",
                    background: "#435368",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <div style={{ width: "50%" }}>
                    <LeftTopComponent />
                    <LeftDownComponent />
                </div>
                {/* <h1>{TitleChangerLD}</h1> */}
                <div style={{ width: "50%" }}>
                    <RightTopComponent />
                    <RightDownComponent />
                </div>
            </div>
        );
    }
// }

export default App;
