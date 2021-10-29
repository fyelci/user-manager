import {useHistory} from "react-router-dom";
import {useAuth} from "../context/authContext";
import React from "react";

const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    auth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

export { AuthButton }
