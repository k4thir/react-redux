import TitleChangerLD from "./titleChangerLD";
import TitleChangerLT from "./titleChangerLT";
import TitleChangerRT from "./titleChangerRT";
import TitleChangerRD from "./titleChangerRD";
import { combineReducers } from "redux";


const Reducers = combineReducers({
    TitleChangerLD,
    TitleChangerLT,
    TitleChangerRD,
    TitleChangerRT
});

export default Reducers;
