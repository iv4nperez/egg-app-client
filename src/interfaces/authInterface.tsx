
export interface action {
    type: string,
    payload: login
    
}

export interface login {
    uid: string,
    displayName: string,
    email: string,
    token: string,
    rol: string,
    logged: boolean,
    apellido: string, 
    password: string, 
    dni: string
}

export interface Iprops {
    path?: string,
    exact?: boolean,
    isAuthenticated?: boolean,
    component: any,
    rest?: {
        [x: string]: any
    }
}