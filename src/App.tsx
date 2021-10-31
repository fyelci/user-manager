import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import {AuthProvider} from "./context/authContext";
import {LoginPage} from "./pages/login";
import {Home} from "./pages/home";
import {Dashboard} from "./pages/dashboard";
import {PrivateRoute} from "./components/PrivateRoute";
import {Navigation} from "./components/Navigation";
import {ProfilePage} from "./pages/profile";



export default function App() {


    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navigation />

                    <div className="outer">
                        <div className="inner">
                            <Switch>
                                <Route path="/login">
                                    <LoginPage/>
                                </Route>
                                <PrivateRoute path="/protected">
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute path="/profile">
                                    <ProfilePage/>
                                </PrivateRoute>

                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
}
