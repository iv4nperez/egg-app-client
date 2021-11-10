import { EggNavbar, EggButton } from '../core/index'
import { Main, Greeting } from '../../styles/generics/StyledEggApp'
import { EggAddChild } from './EggAddChild'
import { EggListChild } from './EggListChild'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { Link } from 'react-router-dom'
import { ItemOptionTheme } from "../core/EggNavBar/StyledNavbar";
import { HiOutlineLogin, HiOutlineUser } from 'react-icons/hi'
import { setActiveAdmin, setShowFormChild } from '../../actions/egg'

export const EggScreen = () => {
    const dispatch = useDispatch();

    const { name, role }: { name: string, role: string } = useSelector((state: any) => state.auth);
    const { showFormChild }: { showFormChild: boolean, role: string } = useSelector((state: any) => state.users);

    const handleShowForm = () => {
        // setshowFormChild(!showFormChild)
        dispatch( setShowFormChild() )
    }

    const handleShowAdmin = () => {
        dispatch( setActiveAdmin() )
        dispatch( setShowFormChild() )
    }

    const handleLogout = () => {
        localStorage.removeItem('egg-user')
        dispatch(startLogout());
    }

   

    return (
        <div>
            <EggNavbar >

                <ItemOptionTheme onClick={ handleShowAdmin }>
                    <HiOutlineUser
                        size={24}
                        cursor="pointer"
                    />
                        <span  style={{ marginLeft: 5 }}>
                            Mi perfil
                        </span>
                    </ItemOptionTheme>

                <Link
                    to="/auth/login"
                    className="link"
                    onClick={handleLogout}
                >
                    <ItemOptionTheme>
                    <HiOutlineLogin
                        size={24}
                        cursor="pointer"
                    />
                        <span
                            style={{ marginLeft: 5 }}
                        >
                            Logout
                        </span>
                    </ItemOptionTheme>
                </Link>
            </EggNavbar>


            <Main initial="initial" animate="animate">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Greeting>
                        Bienvenido a Egg, {name}
                    </Greeting>
                    {
                        showFormChild
                            ? ''
                            : role === 'ADMIN_ROLE'
                                ? (<EggButton
                                    className="animate__animated animate__fadeIn animate__faster"
                                    width="150px"
                                    onClick={handleShowForm}
                                >Registrar Hijo</EggButton>)
                                : ''
                    }

                </div>

                {
                    showFormChild
                        ? (<EggAddChild className="animate__animated animate__fadeIn animate__faster" />)
                        : (<EggListChild className="animate__animated animate__fadeIn animate__faster" />)
                }

            </Main>
            <br />
            <br />
        </div>
    )
}
