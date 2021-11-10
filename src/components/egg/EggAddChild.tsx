import { useFormik } from 'formik'
import * as Yup from 'yup'

import { EggAlert, EggButton, EggTextField } from '../core/index'
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveAdminFalse, setClearActiveEditUser, setShowFormChild, startRegisterChild, startUpdatedChild } from '../../actions/egg';
import { IRegister } from '../../interfaces/eggInterface';
import { startUpdatedProfile, startValidationEmail } from '../../actions/auth';

interface IProps {
    className?: string
}

interface userActive {
    rol: string,
    estado: boolean,
    google: boolean
    _id: string,
    nombre: string,
    apellido: string,
    dni: string,
    creadoPor: string,
    correo: string,
    password: string,
    __v: number
}

export const EggAddChild = ({ className }: IProps) => {
    const dispatch = useDispatch();

    const { email, name, apellido, dni, password, uid, role }: { email: string, name: string, apellido: string, dni: string, password: string, uid: string, role: string } = useSelector((state: any) => state.auth);
    const { activeUserForEdit, activeAdmin }: { activeUserForEdit: userActive, activeAdmin: boolean } = useSelector((state: any) => state.users);
    const { emailValid }: { emailValid: { correoEnUso: boolean, message: string } } = useSelector((state: any) => state.ui);
    const [edit, setEdit] = useState<boolean>(false)
    const [state, setstate] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        correo: '',
        password: ''
    })

    const handleShowForm = () => {
        dispatch(setActiveAdminFalse())
        dispatch(setShowFormChild())
        dispatch(setClearActiveEditUser())
    }

    useEffect(() => {

        if (activeAdmin) {

            setstate({
                nombre: name,
                apellido: apellido,
                dni: dni,
                correo: email,
                password: password
            })
            setEdit(true)
        } else {

            if (activeUserForEdit) {

                setstate({
                    nombre: activeUserForEdit.nombre,
                    apellido: activeUserForEdit.apellido,
                    dni: activeUserForEdit.dni,
                    correo: activeUserForEdit.correo,
                    password: activeUserForEdit.password
                })

                setEdit(true)
            } else {

                setstate({
                    nombre: '',
                    apellido: '',
                    dni: '',
                    correo: '',
                    password: ''
                })
            }
        }

    }, [activeUserForEdit, activeAdmin, email, name, apellido, dni, password, uid])

    const handleValidEmail = async (e: FormEvent<HTMLInputElement>) => {
        dispatch(startValidationEmail(e.currentTarget.value))
    }

    const { handleSubmit, errors, touched, getFieldProps, values } = useFormik({
        initialValues: state,
        onSubmit: async ({ nombre, apellido, correo, dni, password }) => {
            if (edit) {
                let payload = {
                    nombre,
                    apellido,
                    dni
                }

                if (activeAdmin) {
                    dispatch(startUpdatedProfile({ payload, uid: uid }))
                } else {
                    dispatch(startUpdatedChild({ payload, uid: activeUserForEdit._id }))
                }

            } else {

                let payload: IRegister = {
                    nombre,
                    apellido,
                    correo,
                    dni,
                    password,
                    creadoPor: email
                }

                dispatch(startRegisterChild(payload))
            }

            handleShowForm()
            dispatch(setActiveAdminFalse())
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('El campo nombre es requerido'),
            apellido: Yup.string()
                .required('El campo apellido es requerido'),
            dni: Yup.string()
                .required('El campo dni es requerido'),
            correo: Yup.string()
                .required('El campo correo es requerido')
                .email('El campo correo no tiene un formato valido')
                .test('email-unique', emailValid.message, (correo?: string | null) => {
                    return emailValid.correoEnUso ? false : true
                }),
            password: Yup.string()
                .required('El campo password es requerido')
                .min(6, 'El campo password al menos debe de tener 6 caracteres')
        }),
        enableReinitialize: true
    })

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
        >
            {
                edit ? (<EggAlert>
                    Información <br />
                    1. El correo estará el modo lectura. <br />
                    2. El password estará el modo lectura.
                </EggAlert>) : ''
            }

            {
                activeAdmin && (<span style={{ color: '#7a7a7a' }}>Mi Perfil</span>)
            }
            <div className={className}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px 20px' }}>
                    <EggTextField
                        disabled={ role !== 'ADMIN_ROLE' }
                        autoComplete="off"
                        placeholder="Nombre"
                        {...getFieldProps('nombre')}
                        error={touched.nombre && !!errors.nombre}
                        messageError={errors.nombre}
                    ></EggTextField>

                    <EggTextField
                        disabled={ role !== 'ADMIN_ROLE' }
                        autoComplete="off"
                        placeholder="Apellido"
                        {...getFieldProps('apellido')}
                        error={touched.apellido && !!errors.apellido}
                        messageError={errors.apellido}
                    ></EggTextField>
                </div>

                <div>
                    <EggTextField
                        disabled={ role !== 'ADMIN_ROLE' }
                        autoComplete="off"
                        placeholder="DNI"
                        {...getFieldProps('dni')}
                        error={touched.dni && !!errors.dni}
                        messageError={errors.dni}
                    ></EggTextField>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px 20px' }}>
                    <EggTextField
                        disabled={edit}
                        autoComplete="off"
                        placeholder="Email"
                        {...getFieldProps('correo')}
                        value={values.correo}
                        onInput={(e) => handleValidEmail(e)}
                        error={touched.correo && !!errors.correo}
                        messageError={errors.correo}
                    ></EggTextField>
                    <EggTextField
                        disabled={edit}
                        type="password"
                        placeholder="Password"
                        {...getFieldProps('password')}
                        error={touched.password && !!errors.password}
                        messageError={errors.password}
                    ></EggTextField>
                </div>

               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px 20px' }}>
                    <EggButton type="button" width="100px" onClick={handleShowForm} >Salir</EggButton>
                    {
                         role === 'ADMIN_ROLE' && (<EggButton type="submit" width="100px">Guardar</EggButton>)
                    }
                </div>
            </div>
        </form>
    )
}
