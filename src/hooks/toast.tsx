import React, { createContext, useCallback, useContext, PropsWithChildren } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
    addToast(): void;
    removeToast(): void;
    children?: any;
    
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const addToast = useCallback(() => {
        console.log('addToast');
    }, []);
    const removeToast = useCallback(() => {
        console.log('removeToast');
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if(!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };