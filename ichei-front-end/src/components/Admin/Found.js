import './Style/Found.css';

const Found = ({ objects }) => {
    return (
        <div className="lista-objetos-encontrado">
            <table className="tabela-objetos-encontrado">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Local</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {objects.map((object, index) => (
                        <tr key={index}>
                            <td>{object.name}</td>
                            <td>{object.local}</td>
                            <td>{object.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}


export default Found;