import React , { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import { firebase } from "../firebase/firebase-config";
import { EggScreen } from '../components/egg/EggScreen';
import { AuthRouter } from './AuthRouter';
// import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
// import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { logged }: { logged: boolean } = useSelector( (state: any) => state.auth );

    const [ checking, setChecking ] = useState<boolean>(true);
    //const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(logged)

    useEffect( () => {
        
        let user = JSON.parse(localStorage.getItem('egg-user')!);
        if ( user ) {
            let { _id, nombre, correo, token, logged, rol, apellido, password, dni } =  user 
            dispatch( login( _id, nombre, correo, token,  rol,logged,  apellido, password,  dni  ) );
        } 
        setChecking( false );
        
    },[ dispatch,setChecking ]);

    if ( checking ) {
        return (
            <div style={{ display: 'flex', justifyContent:'center' }}>
                <h1 style={{marginTop:'40vh'}}> Please wait...</h1>
            </div>
        )
    }

    return (
        <Router>
            <div >
                <Switch>
                    <PublicRoute   
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ logged }
                    /> 

                    <PrivateRoute 
                        exact
                        isAuthenticated={ logged }
                        path="/" 
                        component={ EggScreen }
                    />

                    <Redirect to="/auth/login"  />
                </Switch>
            </div>
        </Router>
    )
}