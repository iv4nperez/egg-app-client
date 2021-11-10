import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null,
    emailValid: {
        correoEnUso: false,
        message: ''
    }
}

export const uiReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.uiStarLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        case types.validEmail:
            return {
                ...state,
                emailValid: action.payload
            }

        default:
            return state;
    }
}