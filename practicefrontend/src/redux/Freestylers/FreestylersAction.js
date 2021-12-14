import axios from "axios";
import { freestylerTypes } from "../Freestyler/FreestylerTypes";


export const baseActions = {
    startLoading: () => ( { type: freestylerTypes.startLoading } ),
    stopLoading: () => ( { type: freestylerTypes.stopLoading } ),
    setEntities: ( entities ) => ( { type: freestylerTypes.setEntities, payload: entities } ),
    clearState: () => ( { type: freestylerTypes.clearState } )
};


export const startLoadingFreestylers = () => {

    return async ( dispatch ) => {
        try {
            dispatch( baseActions.startLoading() );

            const response = await axios.get( `` );
            const { results } = response.data;
            dispatch( baseActions.setEntities( results ) );
        } catch ( error ) {
            console.log(error);
        } finally {
            dispatch( baseActions.stopLoading() );
        }
    };
};

export const startDeletingFreestyler = ( id ) => {

    return async ( dispatch ) => {
        try {
            if ( id ) {
                await axios.delete( `` );
                dispatch( startLoadingFreestylers() );
            }
        } catch ( err ) {
            console.log(err);
        }
    };
};