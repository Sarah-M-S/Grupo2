import React, { useState } from 'react';
import './Style/ObjectForm.css';
import { useTranslation } from "react-i18next";

function Add_Object(){
    const [formValues, setFormValues] = useState({
        object: '',
        color: '',
        brand: '',
        details: '',
        data: '',
        local: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para o servidor ou fazer outras ações necessárias
        console.log('Dados do formulário:', formValues);
    };

    const { t } = useTranslation();

    return (
        <div className="container-formulario-objeto-admin">
        <form className="formulario-objeto-admin" onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="object"
                    className="objeto"
                    value={formValues.object}
                    onChange={handleChange}
                    placeholder={t("objetoNome")}
                />
            </label>

            <label>
                <input
                    type="text"
                    name="color"
                    className="cor-objeto-admin"
                    value={formValues.color}
                    onChange={handleChange}
                    placeholder={t("objetoCor")}
                />
            </label>

            <label>
                <input
                    type="text"
                    name="brand"
                    className="marca-objeto-admin"
                    value={formValues.brand}
                    onChange={handleChange}
                    placeholder={t("objetoMarca")}
                />
            </label>

            <label>
                <textarea
                    type="text"
                    name="details"
                    className='detalhe-objeto-admin'
                    value={formValues.details}
                    onChange={handleChange}
                    placeholder={t("objetoDetalhes")}
                />
            </label>

            
            <label>
                <input
                    type="date"
                    name="data"
                    className='data-objeto-admin'
                    value={formValues.data}
                    onChange={handleChange}
                />
            </label>



            <label>
                <input
                    type="text"
                    name="local"
                    className='local-objeto-admin'
                    value={formValues.local}
                    onChange={handleChange}
                    placeholder={t("objetoLocal")}
                />
            </label>


            <button className="btn-enviar-objeto-admin" type="submit">{t("enviar")}</button>
        </form>
        </div>
    )
}


export default Add_Object;