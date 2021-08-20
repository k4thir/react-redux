
const TitleChangerLD = (state,action) =>{
    switch(action.type){
//LEFT DOWN
        case "leftDownBtnA" :
            // return state = 'Button A'
            state = 'Button A';
            return state ;
        case "leftDownBtnB" :
            state = 'Button B'
            return state ;
        case "leftDownBtnC" :
            state = 'Button C';
            return state ;
//RIGHT TOP
        case "rightTopBtnA" :
            // return state = 'Button A'
            state = 'Button A';
            return state ;
        case "rightTopBtnB" :
            state = 'Button B'
            return state ;
        case "rightTopBtnC" :
            state = 'Button C';
            return state ;
//RIGHT DOWN
        case "rightDownBtnA" :
            // return state = 'Button A'
            state = 'Button A';
            return state ;
        case "rightDownBtnB" :
            state = 'Button B'
            return state ;
        case "rightDownBtnC" :
            state = 'Button C';
            return state ;
//LEFT TOP
        case "leftTopBtnA" :
            // return state = 'Button A'
            state = 'Button A';
            return state ;
        case "leftTopBtnB" :
            state = 'Button B'
            return state ;
        case "leftTopBtnC" :
            state = 'Button C';
            return state ;

        default:
            state = 'Left Down';
            return state ;
    };
};

export default TitleChangerLD; 