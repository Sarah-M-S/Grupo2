import './Style/Report.css';

const Report = ({ reports }) => {
    return (
        <div className="lista-objetos-reporte">
            <table className="tabela-objetos-reporte">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Objeto</th>
                        <th>Local</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((reports, index) => (
                        <tr key={index}>
                            <td>{reports.name}</td>
                            <td>{reports.object}</td>
                            <td>{reports.local}</td>
                            <td>{reports.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Report;