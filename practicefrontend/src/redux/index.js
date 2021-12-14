import { combineReducers } from "redux";
import {freestylerReducer} from "../redux/Freestyler/FreestylerReducer";
import {freestylersReducer} from "../redux/Freestylers/FreestylersReducer";


export const reducers = combineReducers({
    freestylersReducer,
    freestylerReducer
})