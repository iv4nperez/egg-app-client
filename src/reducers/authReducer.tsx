import { action } from "../interfaces/authInterface";
import { types } from "../types/types";



export const authReducer = (state = {}, action: action) => {

    switch (action.type) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                token: action.payload.token,
                role: action.payload.rol,
                logged: action.payload.logged,
                apellido: action.payload.apellido,
                password: action.payload.password,
                dni: action.payload.dni
            }

        case types.logout:
            return {}

        default:
            return state;
    }

}
