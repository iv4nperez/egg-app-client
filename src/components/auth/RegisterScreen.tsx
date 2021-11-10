import { useFormik } from 'formik'
import * as Yup from 'yup'

import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { startRegister, startValidationEmail } from '../../actions/auth'

import { EggButton, EggTextField, EggTittle } from '../core/index'
import { IRegister } from '../../interfaces/eggInterface'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { emailValid }: { emailValid: { correoEnUso: boolean, message: string } } = useSelector((state: any) => state.ui);
    // const { loading } = useSelector( state => state.ui );

    const [state] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        correo: '',
        password: ''
    })

    // const handleLogin = ( e:FormEvent ): void => {
    //     e.preventDefault();

    //     //dispatch( startLoginEmailPassword( email, password) );
    // }

    // const handleGoogleLogin = () => {
    //     dispatch( startGoogleLogin() );
    // }
    const handleValidEmail = async (e: FormEvent<HTMLInputElement>) => {
        dispatch(startValidationEmail(e.currentTarget.value))
    }


    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: state,
        onSubmit: async ({ nombre, apellido, correo, dni, password }) => {

            let payload: IRegister = {
                nombre,
                apellido,
                correo,
                dni,
                password,
                creadoPor: 'eggApplication',
                rol: 'ADMIN_ROLE'
            }

            dispatch(startRegister(payload))
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
        <>
            {/* <h3 className="auth__title">Login</h3> */}
            <EggTittle>Registrarsé en Egg</EggTittle>
            <form
                onSubmit={handleSubmit}
                noValidate
                className="animate__animated animate__fadeIn animate__faster"
            >
                <EggTextField
                    placeholder="Nombre"
                    type="text"
                    {...getFieldProps('nombre')}
                    error={touched.nombre && !!errors.nombre}
                    messageError={errors.nombre}
                ></EggTextField>


                <EggTextField
                    placeholder="Apellido"
                    type="text"
                    {...getFieldProps('apellido')}
                    error={touched.apellido && !!errors.apellido}
                    messageError={errors.apellido}
                ></EggTextField>

                <EggTextField
                    placeholder="DNI"
                    type="text"
                    {...getFieldProps('dni')}
                    error={touched.dni && !!errors.dni}
                    messageError={errors.dni}
                ></EggTextField>

                <EggTextField
                    placeholder="Correo"
                    type="text"
                    onInput={(e) => handleValidEmail(e)}
                    {...getFieldProps('correo')}
                    error={touched.correo && !!errors.correo}
                    messageError={errors.correo}
                ></EggTextField>

                <EggTextField
                    placeholder="Password"
                    type="password"
                    {...getFieldProps('password')}
                    error={touched.password && !!errors.password}
                    messageError={errors.password}
                ></EggTextField>

                <br />

                <br />
                <EggButton type="submit">Crear Cuenta</EggButton>
                <br />
                <br />
                {/* <div className="auth__social-network">
                <p>Registro con Google</p>
                <div 
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Google</b>
                    </p>
                </div>
            </div> */}

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Ir a Login
                </Link>

            </form>
        </>
    )
}
