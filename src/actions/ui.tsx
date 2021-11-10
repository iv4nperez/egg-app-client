import { types } from "../types/types"


export const setError = ( err: any ) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStarLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});

export const setValidCorreo = ( payload: object ) => ({
    type: types.validEmail,
    payload: payload
})