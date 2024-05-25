import { Link, Outlet } from 'react-router-dom';

const Main = ({ }) => {
    return (

        <div>
            <Link to="list"><button type="button">Lista</button></Link>
            <button type="button" disabled>Mapa</button>
            <Link to="report_form"><button type="button">Reportar Perda</button></Link>

            <Outlet />

        </div>

    );
};


export default Main;