import * as React from "react";
import {createContext, useContext, useState} from "react";
import {ContextType, User} from "../types";
import * as authService from "../services/auth.service";

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider: React.FC<{}> = ({ children }) =>  {
    const [user, setUser] = useState<User | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const signin = async  (username: string, password: string, cb: Function) => {
        try {
            const user = await authService.login(username, password);
            setUser(user);
            cb();
        } catch (err) {
            setErrorMessage('Could not login. Please check your username/password and try again')
        }
    };

    const signout = async (cb: Function) => {
        try {
            await authService.logout();
            setUser(null);
            cb();
        } catch (err) {
            setErrorMessage((err as Error).message)
        }

    };

    return (
        <AuthContext.Provider value={{ user, signin, signout, errorMessage }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): ContextType => {
    return useContext(AuthContext) as ContextType;
}
