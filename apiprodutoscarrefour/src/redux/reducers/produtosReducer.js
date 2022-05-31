import { ActionTypes } from "../constants/action-types";

const initialState = {
    categorias: [],
    produtos: [],
};

export const produtosReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.SET_PRODUTOS:
            const cat = payload.map((produto)=>{
                return produto.categories[2].slice(1, -1)
            })
           return {
                ...state,
                produtos: payload,
                categorias: [...new Set(cat)]
            }
        default:
            return state;
    }
};