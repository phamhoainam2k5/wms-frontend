import React from 'react';

import '../style/form-login.css';

const LoginForm = () => (
    <div className="login-card">
        <h2>Đăng Nhập</h2>
        <div className="input-group">
            <input type="text" placeholder="Mã Nhân Viên" />
        </div>
        <div className="input-group">
            <input type="password" placeholder="Mật Khẩu" />
        </div>
        <button className="login-button">Đăng nhập</button>
    </div>
);

export default LoginForm;