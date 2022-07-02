import React from 'react';

import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';


const App: React.FC = () => (
    <>
        <AppProvider>
            <SignIn />
        </AppProvider>
            
        <GlobalStyle />
    </>
);

export default App;
