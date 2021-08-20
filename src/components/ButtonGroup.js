import React, { Component } from "react";
import { useDispatch} from "react-redux";
import TitleChangerLT from "../reducers/titleChangerLT";
import { leftTopBtnA,
        leftTopBtnB,
        leftTopBtnC,
        leftDownBtnA,
        leftDownBtnB,
        leftDownBtnC,
        rightDownBtnA,
        rightDownBtnB,
        rightDownBtnC,
        rightTopBtnA,
        rightTopBtnB,
        rightTopBtnC
 } from '../actions'
// import leftTopBtnA from './../actions/index';

// class ButtonGroup extends Component {
    
//     render() {
function ButtonGroup(props){
    const dispatch = useDispatch(TitleChangerLT);
        return (
            <div>
                {props.technologies.map((tech, i) => (
                    <button
                        key={`btn-${i}`}
                        onClick={() => dispatch(dispatcher(props.side,i))}
                    >
                        {tech}
                    </button>
                ))}
            </div>
        );
    }
// }

function dispatcher(func,i){
    switch (func){
        case 'leftTop':
            switch(i){
                case 0:
                    return leftTopBtnA()
                case 1:
                    return leftTopBtnB()
                case 2:
                    return leftTopBtnC()
                default:
                    return leftTopBtnA()
            }
        case 'leftDown':
            switch(i){
                case 0:
                    return leftDownBtnA()
                case 1:
                    return leftDownBtnB()
                case 2:
                    return leftDownBtnC()
                default:
                    return leftTopBtnA()
            }
        case 'rightTop':
            switch(i){
                case 0:
                    return rightDownBtnA()
                case 1:
                    return rightDownBtnB()
                case 2:
                    return rightDownBtnC()
                default:
                    return rightTopBtnA()
            }
        case 'rightDown':
            switch(i){
                case 0:
                    return rightDownBtnA()
                case 1:
                    return rightDownBtnB()
                case 2:
                    return rightDownBtnC()
                default:
                    return rightTopBtnA()
            }
        default:
        return leftTopBtnA()

    }
}

export default ButtonGroup;

