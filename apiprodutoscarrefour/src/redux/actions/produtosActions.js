import { ActionTypes } from "../constants/action-types"

export const setProdutos = (produtos) => {
    return {
        type: ActionTypes.SET_PRODUTOS,
        payload: produtos
    }
} 
