import React from 'react';
import { Route, Redirect } from "react-router";

// allows from a secure route to be made in the app.js file.  In this case, it was used to secure BubblePage.js from rendering without a token present in localStorage
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
            <Redirect to='/login' />
            )
        }
    />
);

export default PrivateRoute;







