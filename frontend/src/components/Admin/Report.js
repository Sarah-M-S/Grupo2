import React, { useState, useEffect } from "react";
import './Style/Report.css';

function Report() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8083/admin/perdidos")
            .then(res => res.json())
            .then(data => {
                setReports(data.itens);
            });
    }, []);

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
                    {reports.map((report, index) => (
                        <tr key={index}>
                            <td>{report.nomePessoa}</td>
                            <td>{report.tituloItem}</td>
                            <td>{report.local}</td>
                            <td>{report.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Report;