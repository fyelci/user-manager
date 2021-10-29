import React from "react";
import {useAuth} from "../context/authContext";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute: React.FC<{path: string}> = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
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
    );
}

export { PrivateRoute }
