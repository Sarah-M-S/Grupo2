import { Link, Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './Style/img/logo-ichei.png';
import './Style/Admin.css';
import { useTranslation } from "react-i18next";

const Admin = () => {
    const { t } = useTranslation();
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);  // Novo estado para controle de carregamento

    useEffect(() => {
        const handleAuth = async () => {
            try {
                const response = await fetch('http://localhost:8083/admin', {
                    method: 'GET',
                    headers: {
                        'access-token': localStorage.getItem('token'),
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.authenticated) {
                        setAuth(true);
                    }
                } else {
                    console.log('Erro ao autenticar:', response.status);
                }
            } catch (error) {
                console.log('Erro ao fazer o fetch:', error);
            } finally {
                setLoading(false);  // Independente do resultado, finalizamos o carregamento
            }
        };

        handleAuth();
    }, []); // Executa apenas uma vez, após a montagem do componente

    if (loading) {
        return <div>Loading...</div>;  
    }

    return (
        auth ?
            <div className="container-admin">
                <header>
                    <img className="logo-ichei-admin-cabecalho" src={logo} alt="logo-ichei" />
                    <h1 className="titulo-admin">{t("areaAdmin")}</h1>
                </header>
                <div className="menu-admin">
                    <div className="menu-admin-links">
                        <Link to="found"><button className="btn-encontrados" type="button">{t("objetosEncontrados")}</button></Link>
                        <Link to="report"><button className="btn-reportes" type="button">{t("objetosReportados")}</button></Link>
                        <Link to="objectForm"><button className="btn-add-objeto" type="button">{t("adicionarObjeto")}</button></Link>
                        <Outlet />
                    </div>
                </div>
            </div>
            : <Navigate to={"/login"} />
    );
};

export default Admin;