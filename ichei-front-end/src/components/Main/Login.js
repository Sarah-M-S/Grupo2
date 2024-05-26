import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Login.css';
import cookie from './Style/img/cookie.png';
import logo from './Style/img/logo-ichei.png';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleFormSubmit() {
        navigate("/admin");
    };

    return (
        <div className="content-funcionario">
        <div className="container-funcionario">
            <form className="login-funcionario"onSubmit={handleFormSubmit}>
                
            <div className="logo-funcionario">
                <img className="logo-ichei-funcionario" src={logo} alt="logo-ichei" />
                <h1 className="titulo-funcionario">Área do Funcionário</h1>
            </div>

            <div className="inputs-login">
                    <input
                        type="text"
                        name="username"
                        className="input-usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder='Usuário'
                    />

                    <input
                        type="password"
                        name="password"
                        className="input-senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Senha'
                    />
                </div>

                <div>
                    <button className="btn-esqueceu-senha">Esqueci a Minha Senha</button>
                </div>

                <div className="container-entrar">
                    <button className="btn-entrar" type="submit">Entrar</button>
                </div>

            </form>
        
        <div className="rodape">
            <img className="cookie" src={cookie} alt="cookie" />
            <button className="faq">FAQ</button>            
        </div>
        </div>
        
        </div>
        
    );
}

export default Login;