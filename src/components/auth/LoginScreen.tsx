import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

import { EggAlert, EggButton, EggTextField, EggTittle } from '../core/index'

export const LoginScreen = ({ history }: any) => {

    const dispatch = useDispatch();
    const { loading, msgError }: { loading: boolean, msgError: string } = useSelector((state: any) => state.ui);
    const { logged }: { logged: boolean } = useSelector((state: any) => state.auth);

    const [formValues, handleInputChange] = useForm({
        email: 'iv4n.perez_@hotmail.com',
        password: '1234567'
    });

    const { email, password } = formValues;

    const handleLogin = (e: FormEvent): void => {

        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password));

        if (logged) {
            history.replace('/')
        }
    }

    // const handleGoogleLogin = () => {
    //     dispatch( startGoogleLogin() );
    // }

    return (
        <>
            {/* <h3 className="auth__title">Login</h3> */}
            <EggTittle>Iniciar sesión en Egg</EggTittle>


            {

                msgError !== null && (<EggAlert> {msgError} </EggAlert>)

            }


            <form
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <EggTextField
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                ></EggTextField>


                <EggTextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                ></EggTextField>
                <br />
                <br />
                <EggButton disabled={loading} type="submit">Iniciar Sesión</EggButton>
                <br />
                <br />
                {/* <div className="auth__social-network">
                    <p>Login con Google</p>
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
                    to="/auth/register"
                    className="link"
                >
                    Crear nueva cuenta
                </Link>

            </form>
        </>
    )
}