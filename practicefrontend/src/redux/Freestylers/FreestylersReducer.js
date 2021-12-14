
import { freestylersInitialState } from "../../models/freestylersInitialState";
import { freestylerTypes } from "../Freestyler/FreestylerTypes";


export function freestylersReducer(state = freestylersInitialState, action) {
    switch (action.type) {
        case freestylerTypes.startLoading: {
            return {
                ...state,
                isLoading: true
            };
        }
        case freestylerTypes.stopLoading: {
            return {
                ...state,
                isLoading: false
            };
        }
        case freestylerTypes.setEntities: {
            return {
                ...state,
                entities: action.payload
            };
        }
        case freestylerTypes.clearState: {
            return {
                ...freestylersInitialState
            };
        }
        default:
            return { ...state };
    }
};