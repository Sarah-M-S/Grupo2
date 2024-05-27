import { Link, Outlet } from 'react-router-dom';
import logo from './Style/img/logo-ichei.png';
import './Style/Admin.css';
import { useTranslation } from "react-i18next";

const Admin = ({ }) => {
    const { t } = useTranslation();
    return (
        

        <div className="container-admin">
            <header>
                <img className="logo-ichei-admin-cabecalho" src={logo} alt="logo-ichei" />
                <h1 className="titulo-admin">{t("areaAdmin")}</h1>
            </header>


            <div className="menu-admin">
            
            <div className="menu-admin-links">

                <Link to="found"><button className="btn-encontrados" type="button">{t("objetosEncontrados")}</button></Link>
                <Link to="report"><button className="btn-reportes" type="button">{t("objetosReportados")}</button></Link>
                <Link to="add_object"><button className="btn-add-objeto" type="button">{t("adicionarObjeto")}</button></Link>

            
            <Outlet />
            </div>

            </div>
            
        </div>

    );
};


export default Admin;