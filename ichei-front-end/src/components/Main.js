const Main = ({ objects }) => {
    return (

        <div>
            <button type="button" disabled>Lista</button>
            <button type="button" disabled>Mapa</button>
            <ul>
                {objects.map((objects, index) => (
                    <li key={index}>
                        <span>Objeto: {objects.name}</span>
                        <span>Local: {objects.local}</span>
                        <span>Data: {objects.data}</span>
                    </li>
                ))}
            </ul>
        </div>

    );
};


export default Main;