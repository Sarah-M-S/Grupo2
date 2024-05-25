import { Link, Outlet } from 'react-router-dom';

const Admin = ({ }) => {
    return (
        

        <div>
            <header>AREA ADMIN</header>
            
            <div>
            <Link to="found"><button type="button">ENCONTRADOS</button></Link>
            <Link to="report"><button type="button">REPORTES</button></Link>
            <Link to="add_object"><button type="button">ADICIONAR OBJETO</button></Link>

            <Outlet />
            </div>
            
        </div>

    );
};


export default Admin;