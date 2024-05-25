const Main = ({ objects }) => {
    return (

        <div>
            <button type="button" disabled>Lista</button>
            <button type="button" disabled>Mapa</button>
            <table>
                <thead>
                    <tr>
                        <th>Objeto</th>
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

    );
};


export default Main;