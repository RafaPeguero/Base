import axios from "axios";
import { freestylerTypes } from "./FreestylerTypes";

export const baseActions = {
    startLoading: () => ( { type: freestylerTypes.startLoading } ),
    stopLoading: () => ( { type: freestylerTypes.stopLoading } ),
    setValue: ( coruier ) => ( { type: freestylerTypes.setValue, payload: coruier } ),
    clearState: () => ( { type: freestylerTypes.clearState } ),
    startSaving: () => ( { type: freestylerTypes.startSaving } ),
    stopSaving: () => ( { type: freestylerTypes.stopSaving } ),
};


export const startSavingFreestyler = ( calllbackFn = () => { } ) => {
    return async ( dispatch, getState ) => {
        try {
            dispatch( baseActions.startSaving() );
            const { data } = getState().Freestyler;

            const isEdit = !!data.id;

            const action = isEdit ? axios.put( ``, { ...data } ) : axios.post( `apiUrls.couriers`, { ...data } );
            await action;

           // displayCorrectlySaved( calllbackFn, { text: "El courier fue guardado exitosamente.", confirmButtonText: "Ok" } );
        } catch ( error ) {
            // displayError( { text: 'Ocurrio un error al guardar el courier.' } )
        }
        finally {
            dispatch( baseActions.stopSaving() );
        }
    };
};

export const startFetchingFreestyler = ( id ) => {
    return async ( dispatch ) => {
        try {
            dispatch( baseActions.startLoading() );
            const { data } = await axios.get( `` );
            dispatch( baseActions.setValue( { ...data } ) );
        } catch ( error ) {
            // displayError( { text: 'Ocurrio un error al cargar el courier.' } );

        } finally {
            dispatch( baseActions.stopLoading() );
        }
    };
};
