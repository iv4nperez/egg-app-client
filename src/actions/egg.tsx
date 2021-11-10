import { IRegister, IUser } from "../interfaces/eggInterface"
import http from '../api/http'
import { types } from "../types/types"

export const startRegisterChild = ({ nombre, apellido, dni, correo, password, creadoPor }: IRegister) => {
    return async (dispatch: any) => {

        try {

            let payload = {
                nombre,
                apellido,
                dni,
                correo,
                password,
                creadoPor: creadoPor,
                rol: 'USER_ROLE'
            }

            let { data } = await http.post(`api/usuario`, JSON.stringify(payload))

            dispatch(setUser(data.usuario))

        } catch (error) {

        }
    }
}


export const startUpdatedChild = (payload: any) => {
    return async (dispatch: any) => {

        let { data } = await http.put(`api/usuario/${payload.uid}`, JSON.stringify(payload.payload))

        dispatch(setUserUpdated(data))
    }
}


export const startLoadingAllUserRegisterByEmail = (correo: string, limit: number = 10, page: number = 1) => {
    return async (dispatch: any) => {

        try {

            let { data } = await http.get(`api/usuario?correo=${correo}&?limit=${limit}&page=${page}`)
            dispatch(setListUsers(data.usuarios))

        } catch (error) {

        }
    }
}


export const startDeleteUserById = (uid: string) => {
    return async (dispatch: any) => {
        let { data } = await http.delete(`api/usuario/${uid}`)
        dispatch(setDeleteItem(data._id))
    }
}






export const setListUsers = (user: object) => ({
    type: types.usersLoad,
    payload: user
})
export const setUser = (user: object) => ({
    type: types.userAddNew,
    payload: user
})
export const setShowFormChild = () => ({
    type: types.eggShowFormChild
})
export const setActiveEditUser = (user: IUser) => ({
    type: types.activeUserForEdit,
    payload: user,
})
export const setClearActiveEditUser = () => ({
    type: types.clearActiveUser
})
export const setUserUpdated = (user: IUser) => ({
    type: types.userEdit,
    payload: user
})


export const setActiveAdmin = () => ({
    type: types.userActiveAmin,
})

export const setActiveAdminFalse = () => ({
    type: types.userActiveAminFalse,
})

export const setDeleteItem = (uid: string) => ({
    type: types.deleteItemList,
    payload: uid
})