import { Link, Outlet } from 'react-router-dom';
import logo from './Style/img/logo-ichei.png';
import './Style/Main.css';
const Main = ({}) => {
    return (
        <div>
            <nav className="cabecalho">
                <img className="logo-ichei-cabecalho" src={logo} alt="logo-ichei" />
                <Link className="pagina-inicial" to="/list"> Página Inicial </Link>
                <Link className="pagina-login" to="/login"> Login </Link>
            </nav>


            <div className="container-menu">
                <div className="menu">
                <Link to="list"><button className="btn-lista" type="button">Lista</button></Link>
                <button type="button" className="btn-mapa" disabled>Mapa</button>
                <Link to="report_form"><button className="btn-reportar-perda" type="button">Reportar Perda</button></Link>
                </div>
                <Outlet />
            </div>


        </div>

    );
};


export default Main;