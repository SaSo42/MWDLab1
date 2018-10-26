import {
    ADD_DIGIT, CLEAR_INPUT,
    SET_OP_ADD,
    SET_OP_DIVIDE,
    SET_OP_MULTIPLY,
    SET_OP_SUBSTRACT,
    TRIGGER_EQUALS
} from "./Actions/ActionTypes";

const initialState = {
    accu : null,
    op : null,
    input : "0"
};

function reducer(state = initialState, action){
    console.log("action.type : " + action.type);
    switch (action.type) {
        case ADD_DIGIT: {
            let tempVar = (state.input + action.payload);

            if( (tempVar.charAt(0) === '0') && (tempVar.charAt(1) !== '.') ){
                tempVar = tempVar.slice(1);
            }
            else {
                if ( (tempVar.charAt(1) === '0') && (tempVar.charAt(0) === '-') && (tempVar.charAt(2) !== '.') ) {
                    tempVar = '-' + tempVar.slice(2);
                }
                else {
                    if (tempVar.lastIndexOf('.') !== tempVar.indexOf('.')) {
                        return state;
                    }
                }
            }

            return {...state, input: tempVar};
        }
        case SET_OP_DIVIDE: {
            if( (isNaN(Number(state.input))) || (Number(state.accu) === 0) ) {
                return state;
            }

            if(state.accu != null){
                const temp = getCalculatedValue(state.accu, state.op, Number(state.input));

                if(isNaN(temp)){
                    return state;
                }

                return {...state, input: initialState.input, op : '/', accu: temp};
            }

            return {...state, accu: Number(state.input), op : '/',input: initialState.input };
        }
        case SET_OP_MULTIPLY:{
            if(isNaN(Number(state.input))) {
                return state;
            }

            if(state.accu != null){
                const temp = getCalculatedValue(state.accu, state.op, Number(state.input));

                if(isNaN(temp)){
                    return state;
                }

                return {...state, input: initialState.input, op : '*', accu: getCalculatedValue(state.accu, state.op, Number(state.input))};
            }

            return{...state, accu: Number(state.input), op : '*', input : initialState.input}
        }
        case SET_OP_ADD:{
            if(isNaN(Number(state.input))) {
                return state;
            }

            if(state.accu != null){
                const temp = getCalculatedValue(state.accu, state.op, Number(state.input));

                if(isNaN(temp)){
                    return state;
                }

                return {...state, input: initialState.input, op : '+', accu: getCalculatedValue(state.accu, state.op, Number(state.input))};
            }

            return{...state, accu: Number(state.input), op : '+', input : initialState.input}
        }
        case SET_OP_SUBSTRACT:{
            if(isNaN(Number(state.input))) {
                return state;
            }

            if( (Number(state.input) === 0) && (state.op !== '-')){
                return {...state, input : ('-' + state.input)}
            }

            if(state.accu != null){
                const temp = getCalculatedValue(state.accu, state.op, Number(state.input));

                if(isNaN(temp)){
                    return state;
                }

                return {...state, input: initialState.input, op : '-', accu: temp};
            }

            return{...state, accu: Number(state.input), op : '-', input : initialState.input}
        }
        case TRIGGER_EQUALS: {
            const temp = getCalculatedValue(state.accu, state.op, Number(state.input));

            if(isNaN(temp)){
                return state;
            }

            return {...state, input: temp, op : initialState.op, accu: initialState.accu};
        }
        case CLEAR_INPUT:{
            if( (state.input === null) || (state.input === undefined) || (isNaN(Number(state.input))) || (Number(state.input) === 0) ){
                return initialState;
            }
            else {
                return{...state, input : initialState.input}
            }
        }
        default:
            return state;
    }
}

function  getCalculatedValue(a, operation, b){
    switch (operation) {
        case '/':{
            if ( (isNaN(Number(b))) || (b === 0) ) {
                return NaN;
            }
            return a / b;
        }
        case '*':{
            return a * b;
        }
        case '-':{
            return a - b;
        }
        case '+':{
            return a + b;
        }
        default:
            return NaN
    }
}

export default reducer;