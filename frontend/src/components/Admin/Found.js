import React, { useState, useEffect } from "react";
import './Style/Found.css';
import { useTranslation } from "react-i18next";

function Found() {
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
        <div className="lista-objetos-encontrado">
            <table className="tabela-objetos-encontrado">
                <thead>
                    <tr>
                        <th>{t("objetoNome")}</th>
                        <th>{t("objetoLocal")}</th>
                        <th>{t("objetoData")}</th>
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