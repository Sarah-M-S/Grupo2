import './Style/Found.css';
import { useTranslation } from "react-i18next";

const Found = ({ objects }) => {
    const { t } = useTranslation();
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