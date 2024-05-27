import './Style/Report.css';
import { useTranslation } from "react-i18next";

const Report = ({ reports }) => {
    const { t } = useTranslation();
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