import { types } from "../types/types";


const initialState = {
    listUsers: {
        docs: []
    },
    showFormChild: false,
    activeUserForEdit: null,
    activeAdmin: false
}



export const eggReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case types.activeUserForEdit:
            return {
                ...state,
                activeUserForEdit: {
                    ...action.payload
                }
            }

        case types.eggShowFormChild:
            return {
                ...state,
                showFormChild: !state.showFormChild
            }

        case types.userAddNew:
            return {
                ...state,
                listUsers: {
                    ...state.listUsers,
                    docs: [...state.listUsers.docs, action.payload]
                }
            }

        case types.usersLoad:
            return {
                ...state,
                listUsers: action.payload
            }
        case types.clearActiveUser:
            return {
                ...state,
                activeUserForEdit: null
            }

        case types.userEdit:
            return {
                ...state,
                listUsers: {
                    ...state.listUsers,
                    docs: state.listUsers.docs.map((item: any, i) => item._id === action.payload._id ? action.payload : item)
                }
            }
        case types.userActiveAmin:
            return {
                ...state,
                activeAdmin: !state.activeAdmin
            }
        case types.userActiveAminFalse:
            return {
                ...state,
                activeAdmin: false
            }

        case types.deleteItemList:
            return {
                ...state,
                listUsers: {
                    ...state.listUsers,
                    docs: state.listUsers.docs.filter((item: any) => item._id !== action.payload)
                }
            
            }

        default:
            return state;
    }


}