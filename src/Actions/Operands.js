import {CLEAR_INPUT, SET_OP_ADD, SET_OP_DIVIDE, SET_OP_MULTIPLY, SET_OP_SUBSTRACT, TRIGGER_EQUALS} from "./ActionTypes";

export function setOPDivide() {
    return {
        type: SET_OP_DIVIDE
    };
}

export function setOPMultiply() {
    return {
        type: SET_OP_MULTIPLY
    };
}

export function setOPSubstract() {
    return {
        type: SET_OP_SUBSTRACT
    };
}

export function setOPAdd() {
    return {
        type: SET_OP_ADD
    };
}

export function triggerEquals() {
    return {
        type: TRIGGER_EQUALS
    };
}

export  function clearInput() {
    return {
        type: CLEAR_INPUT
    };
}