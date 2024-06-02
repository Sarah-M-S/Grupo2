import React, { useState, useEffect } from "react";
import './Style/Report.css';
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

function Report() {
    const [reports, setReports] = useState([]);
    const { t } = useTranslation();

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
                        <th>{t("pessoaNome")}</th>
                        <th>{t("objetoNome")}</th>
                        <th>{t("objetoLocal")}</th>
                        <th>{t("objetoData")}</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index}>
                            <td>{report.nomePessoa}</td>
                            <td>{report.tituloItem}</td>
                            <td>{report.local}</td>
                            <td>{format(new Date(report.data), 'dd/MM/yyyy')}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Report;