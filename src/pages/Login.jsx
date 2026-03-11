import React from 'react';

import LoginForm from '../components/form-login' 

import '../style/page-login.css';

const LoginPage = () => {
    return (
        <div className="login-page-container">
            <main className="login-content">
                <LoginForm />
            </main>
        </div>
    );
};

export default LoginPage;