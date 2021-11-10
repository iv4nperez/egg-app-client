export interface IRegister{
    nombre: string,
    apellido: string,
    dni: string,
    correo: string,
    password: string,
    creadoPor: string
    rol?: string
}

export interface IUser {
    _id: string,
    nombre: string,
    apellido: string
}