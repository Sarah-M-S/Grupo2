import { Link, Outlet } from 'react-router-dom';
import logo from './Style/img/logo-ichei.png';
import './Style/Main.css';
import { useTranslation } from "react-i18next";

const Main = ({}) => {
    const { t } = useTranslation();
    return (
        <div>
            <nav className="cabecalho">
                <img className="logo-ichei-cabecalho" src={logo} alt="logo-ichei" />
                <Link className="pagina-inicial" to="/list">{t("paginaInicial")}</Link>
                <Link className="pagina-login" to="/login">{t("login")}</Link>
            </nav>


            <div className="container-menu">
                <div className="menu">
                <Link to="list"><button className="btn-lista" type="button">{t("lista")}</button></Link>
                <button type="button" className="btn-mapa" disabled>{t("mapa")}</button>
                <Link to="report_form"><button className="btn-reportar-perda" type="button">{t("reportarPerda")}</button></Link>
                </div>
                <Outlet />
            </div>


        </div>

    );
};


export default Main;