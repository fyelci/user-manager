import {useHistory, useLocation} from "react-router-dom";
import {useAuth} from "../../context/authContext";
import React from "react";

function LoginPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state as any || { from: { pathname: "/" } };
    let login = () => {
        console.log("username", username);
        console.log("pass", password);
        auth.signin(username, password, () => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <input placeholder="Your username" onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={login}>Log in</button>
            {auth.errorMessage &&
            <p>{auth.errorMessage}</p>
            }
        </div>
    );
}

export {
    LoginPage
}
