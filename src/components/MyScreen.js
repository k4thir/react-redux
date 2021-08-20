import React, { Component } from "react";
import TitleChangerLD from './../reducers/titleChangerLD';
import { useSelector } from "react-redux";
import TitleChangerLT from './../reducers/titleChangerLT';
import TitleChangerRT from './../reducers/titleChangerRT';
import TitleChangerRD from './../reducers/titleChangerRD';
// class MyScreen extends Component {
    
//     render() {
function MyScreen(){

        const TitleChangerLD = useSelector( state => state.TitleChangerLD);
        const TitleChangerLT = useSelector( state => state.TitleChangerLD);
        const TitleChangerRT = useSelector( state => state.TitleChangerLD);
        const TitleChangerRD = useSelector( state => state.TitleChangerLD);
        return (
            <div
                style={{
                    fontSize: "30px",
                    color: "#ffffff",
                    fontWeight: "900"
                }}
            >
                {TitleChangerLD}
            </div>
        );
    }
// }

export default MyScreen;
