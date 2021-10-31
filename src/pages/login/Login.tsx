import {useHistory, useLocation} from "react-router-dom";
import {useAuth} from "../../context/authContext";
import React, {useEffect} from "react";

function LoginPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state as any || { from: { pathname: "/" } };
    let login = (event: React.SyntheticEvent) => {
        event.preventDefault();
        auth.signin(username, password, () => {
            history.replace(from);
        });
    };

    return (
        <form onSubmit={(e) => login(e)}>

            <h3>Log in</h3>

            <div className="form-group">
                <label>Username</label>
                <input placeholder="Your username" onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            {auth.errorMessage &&
            <div className="alert alert-danger" role="alert">auth.errorMessage</div>
            }
        </form>
    );
}

export {
    LoginPage
}
