import { ActionTypes } from "../constants/action-types";

const initialState = {
    error: {
        active : false,
        message: "",
    },
    cep: 0,
    lojas: [],

};

export const lojaReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.GET_LOJAS:
            return {...state, lojas: payload[0].sellers}
        case ActionTypes.SET_CEP:
            return {...state, cep: payload}
        case ActionTypes.SET_ERROR:
            return {...state, lojas:[], error: payload}   
        default:
            return state;
    }
};