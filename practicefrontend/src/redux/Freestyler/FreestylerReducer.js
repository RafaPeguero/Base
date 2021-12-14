import { freestylerInitialState } from "../../models/freestylerInitialState";
import { freestylerTypes } from "./FreestylerTypes";


export function freestylerReducer(state = freestylerInitialState, action) {
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
        case freestylerTypes.setValue: {
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            };
        }
        case freestylerTypes.startSaving: {
            return {
                ...state,
                isSaving: true
            };
        }
        case freestylerTypes.stopSaving: {
            return {
                ...state,
                isSaving: false
            };
        }
        case freestylerTypes.clearState: {
            return {
                ...freestylerInitialState
            }
        }
        default:
            return { ...state };
    }
}