
const TitleChangerRT = (state = 'Right Top',action) =>{
    switch(action.type){
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
        default:
            state = 'Right Top';
            return state;
    };
};

export default TitleChangerRT; 