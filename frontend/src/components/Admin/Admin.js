import { Link, Outlet } from 'react-router-dom';
import logo from './Style/img/logo-ichei.png';
import './Style/Admin.css';

const Admin = ({ }) => {
    return (
        

        <div className="container-admin">
            <header>
                <img className="logo-ichei-admin-cabecalho" src={logo} alt="logo-ichei" />
                <h1 className="titulo-admin">Área do Administrador</h1>
            </header>


            <div className="menu-admin">
            
            <div className="menu-admin-links">
                <Link to="found"><button className="btn-encontrados" type="button">ENCONTRADOS</button></Link>
                <Link to="report"><button className="btn-reportes" type="button">REPORTES</button></Link>
                <Link to="objectForm"><button className="btn-add-objeto" type="button">ADICIONAR OBJETO</button></Link>
            
            <Outlet />
            </div>

            </div>
            
        </div>

    );
};


export default Admin;