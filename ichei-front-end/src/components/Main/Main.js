import { Link, Outlet } from 'react-router-dom';

const Main = ({ }) => {
    return (
        <div>
            <nav>
                <Link to="/list"> Página Inicial </Link>
                <Link to="/login"> Login </Link>
            </nav>

            <div>
                <Link to="list"><button type="button">Lista</button></Link>
                <button type="button" disabled>Mapa</button>
                <Link to="report_form"><button type="button">Reportar Perda</button></Link>

                <Outlet />
            </div>
        </div>

    );
};


export default Main;