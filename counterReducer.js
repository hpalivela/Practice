const counterInitialState = {
    counter: 0
}

const counterReducer = (state = counterInitialState,action) => {
    switch(action.type){
        case "INC":
            return {counter: state.counter + 1};
        case "DEC":
            return {counter: state.counter - 1};
        case "ADDBY":
            return {counter: state.counter + action.payload};
        case "RST":
            return {counter: state.counter = 0}
        default:
            return state;
    }
}

export default counterReducer;