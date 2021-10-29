import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import {LoginPage} from "./pages/login";
import {Home} from "./pages/home";
import {Dashboard} from "./pages/dashboard";
import {PrivateRoute} from "./components/PrivateRoute";
import {AuthButton} from "./components/AuthButton";



export default function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <AuthButton/>

                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/public">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <LoginPage/>
                        </Route>
                        <PrivateRoute path="/protected">
                            <Dashboard/>
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}
