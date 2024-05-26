import './Style/List.css';


const List = ({ objects }) => {
    return (

        <div className="lista-objetos">
            <table className="tabela-objetos">
                <thead>
                    <tr>
                        <th>Objeto</th>
                        <th>Local</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.objects.map((object, index) => (
                            <tr key={index}>
                                <td>{object.tituloItem}</td>
                                <td>{object.local}</td>
                                <td>{object.dataCadastro}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    );
};


export default List;