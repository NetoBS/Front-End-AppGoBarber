import React from "react";

import { AuthProvider } from './auth';
import { ToastProvider } from './toast'

interface AppContextData {
    children?: any;
}

const AppProvider: React.FC<AppContextData> = ({ children }) => (
    <AuthProvider>
        <ToastProvider>
            {children}
        </ToastProvider>
    </AuthProvider>
);

export default AppProvider