import {Link, useHistory} from "react-router-dom";
import React from "react";
import {useAuth} from "../context/authContext";

const Navigation = () => {
    const auth = useAuth();
    let history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>User Management</Link>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        {(!auth || !auth.user) &&
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>Sign in</Link>
                        </li>
                        }
                        {auth && auth.user &&
                        <li className="nav-item">
                            <Link className="nav-link" to={"/protected"}>Protected Page</Link>
                        </li>
                        }
                    </ul>


                    {auth && auth.user &&
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile"}>Profile</Link>
                        </li>

                        <li>
                            <span
                                className="nav-link cursor-pointer"
                                onClick={() => {
                                    auth.signout(() => history.push("/"));
                                }}
                            >
                                Log Out
                            </span>
                        </li>
                    </ul>

                    }
                </div>
            </div>
        </nav>
    )
}

export { Navigation }
