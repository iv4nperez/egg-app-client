
import { Redirect, Route } from 'react-router';
import { Iprops } from '../interfaces/authInterface';



export const PrivateRoute = ({ isAuthenticated , component: Component, ...rest }: Iprops) => {
   
    return (
        <Route 
            { ...rest }  
            component={ ( props: any ) => ( 
                (isAuthenticated) 
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
            
        />
    )
}
