import React, { useState, useEffect } from "react";
import './Style/Found.css';

function Found() {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8083/")
            .then(res => res.json())
            .then(data => {
                setObjects(data.itens);
            });
    }, []);

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
                    {objects.map((object, index) => (
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
}

export default Found;