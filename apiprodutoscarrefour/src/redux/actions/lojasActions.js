import { ActionTypes } from "../constants/action-types"

export const getLojas = (lojas) => {
    return {
        type: ActionTypes.GET_LOJAS,
        payload: lojas
    }
} 

export const setCep = (cep) => {
    return {
        type: ActionTypes.SET_CEP,
        payload: cep
    }
}   

export const setError = (message) =>{
    return {
        type: ActionTypes.SET_ERROR,
        payload: message
    }
}