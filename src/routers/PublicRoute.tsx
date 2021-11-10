
import { Redirect, Route } from 'react-router';
import { Iprops } from '../interfaces/authInterface';



export const PublicRoute = ({  isAuthenticated = false, component: Component, ...rest }: Iprops) => {
    
    return (
        <Route  
            { ...rest } 
            component={ ( props: any ) => ( 
                ( isAuthenticated  ) 
                ? ( <Redirect to="/" /> )
                : ( <Component { ...props } /> )
            )}
        />
    )
}

