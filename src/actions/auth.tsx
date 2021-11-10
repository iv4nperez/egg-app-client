// import Swal from 'sweetalert2'
import http from '../api/http'
import { IRegister } from '../interfaces/eggInterface';
import { createBrowserHistory } from 'history'
// import { IUser } from '../interfaces/eggInterface';
// import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from '../types/types'
// import { noteLogout } from './notes';
import { finishLoading, removeError, setError, setValidCorreo, startLoading } from "./ui";

const browserHistory = createBrowserHistory();

interface IUsuarioLogueado {
    correo: string,
    nombre: string,
    rol: string,
    apellido: string,
    password: string,
    dni: string,
    _id: string
}

export const startLoginEmailPassword = (email: string, password: string) => {

    return async (dispatch: any) => {

        dispatch(startLoading())
        try {

            let payload = {
                correo: email,
                password
            }

            let result = await http.post(`api/auth/login`, JSON.stringify(payload))

            let { data } = result;
            if (data.isCorrect) {

                let { correo, nombre, _id, rol, apellido, dni }: IUsuarioLogueado = data.result;

                localStorage.setItem('egg-user', JSON.stringify({
                    _id,
                    nombre,
                    apellido,
                    password,
                    dni,
                    correo,
                    token: data.token,
                    rol,
                    logged: true
                }))

                dispatch(login(_id, nombre, correo, data.token, rol, true, apellido, password, dni));

            }
            dispatch(removeError())
        } catch (err: any) {

            const { message } = err.response.data;

            dispatch(setError(message))
            dispatch(finishLoading())
        } finally {
            dispatch(finishLoading())
        }
    }
}

export const startRegister = (payload: IRegister) => {
    return async (dispatch: any) => {

        try {
            let { data } = await http.post(`api/usuario/registroUsuario?generateToken=true`, JSON.stringify(payload))
            const { correo, nombre, _id, rol, apellido, dni, password } = data.usuario;
            localStorage.setItem('egg-user', JSON.stringify({
                _id,
                nombre,
                apellido,
                password,
                dni,
                correo,
                token: data.token,
                rol,
                logged: true
            }))

            dispatch(login(_id, nombre, correo, data.token, rol, true, apellido, password, dni));

            browserHistory.push('/')

        } catch (error) {
            console.log(error)
        }
    }
}

export const startValidationEmail = (correo: string) => {
    return async (dispatch: any) => {
        let { data } = await http.get(`api/usuario/validarCorreo/${correo}`)

        dispatch(setValidCorreo(data))
    }
}


export const startGoogleLogin = () => {
    return (dispatch: any) => {
        // firebase.auth().signInWithPopup( googleAuthProvider )
        //     .then( ({ user }) => {
        //         dispatch( 
        //             login( user.uid, user.displayName )
        //         )
        //     });
    }
}

export const login = (uid: string, displayName: string, correo: string, token: string, rol: string, logged: boolean, apellido: string, password: string, dni: string) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        email: correo,
        token,
        rol,
        logged,
        apellido,
        password,
        dni
    }
});

export const startUpdatedProfile = (payload: any) => {
    return async (dispatch: any) => {

        let { data } = await http.put(`api/usuario/${payload.uid}`, JSON.stringify(payload.payload))
        let { correo, nombre, _id, rol, apellido, dni, password }: IUsuarioLogueado = data;
        dispatch(login(_id, nombre, correo, data.token, rol, true, apellido, password, dni))
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})

