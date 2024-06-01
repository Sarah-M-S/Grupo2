import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Login.css';
import cookie from './Style/img/cookie.png';
import logo from './Style/img/logo-ichei.png';
import { useTranslation } from "react-i18next";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const login = {
            email: email,
            password: password,
        };
    
        fetch('http://localhost:8083/autenticar', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
   
            if (data.accessToken) {
                localStorage.setItem("token", data.accessToken)
                navigate("/admin");
            } else {
              
                console.error('Erro na requisição:', data);
            }
        })
        .catch((error) => {
            console.error('Erro na requisição:', error.message);
        });
    };

    return (
        <div className="content-funcionario">
            <div className="container-funcionario">
                <form className="login-funcionario" onSubmit={handleFormSubmit}>

                    <div className="logo-funcionario">
                        <img className="logo-ichei-funcionario" src={logo} alt="logo-ichei" />
                        <h1 className="titulo-funcionario">{t("areaAdmin")}</h1>
                    </div>

                    <div className="inputs-login">
                        <input
                            type="text"
                            name="email"
                            className="input-usuario"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={t("usuario")}
                        />

                        <input
                            type="password"
                            name="password"
                            className="input-senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder={t("senha")}
                        />
                    </div>

                    <div>
                        <button className="btn-esqueceu-senha">{t("esqueciSenha")}</button>
                    </div>

                    <div className="container-entrar">
                        <button className="btn-entrar" type="submit">{t("enviar")}</button>
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