import {combineReducers} from "redux";
import { lojaReducer } from "./lojaReducer";


const reducers = combineReducers({
    allLojas: lojaReducer,
})

export default reducers;