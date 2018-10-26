import {ADD_DIGIT} from "./ActionTypes";

export function addDigit(digit) {
    return {
        type: ADD_DIGIT,
        payload : digit
    };
}