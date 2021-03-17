import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        // very very important not found this Route in React router Website
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

        // very very important not found this Route in React router Website
    );
};

export default PrivateRoute;