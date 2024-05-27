import React, { useState, useEffect } from "react";
import './Style/List.css';
import { useTranslation } from "react-i18next";

function List() {
    const [objects, setObjects] = useState([]);
    const { t } = useTranslation();

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

export default List;