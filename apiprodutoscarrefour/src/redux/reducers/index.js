import {combineReducers} from "redux";
import { lojaReducer } from "./lojaReducer";
import { produtosReducer } from "./produtosReducer";


const reducers = combineReducers({
    allLojas: lojaReducer,
    allProdutos: produtosReducer,
})

export default reducers;