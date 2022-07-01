import React, { createContext, PropsWithChildren, useCallback, } from 'react';
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    name: string;
    signIn(credentials: SignInCredentials): Promise<void>;
    children?: any;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const signIn = useCallback(async({ email, password }: SignInCredentials) => {
        const response = await api.post('sessions', {
            email,
            password,
        })

        console.log(response.data);
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'Neto', signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

