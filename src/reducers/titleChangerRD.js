
const TitleChangerRD = (state = 'Right Down',action) =>{
    switch(action.type){
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
        default:
            state = 'Right Down';
            return state ;
    };
};

export default TitleChangerRD; 