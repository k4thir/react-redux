
const TitleChangerLT = (state = 'Left Top',action) =>{
    switch(action.type){
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
            state = 'Left Top';
            return state;
    };
};

export default TitleChangerLT; 