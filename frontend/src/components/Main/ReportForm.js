import React, { useState } from 'react';
import './Style/ReportForm.css';
import logo from './Style/img/logo-ichei.png';
import { useTranslation } from "react-i18next";


const ReportForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
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
        <div className="container-formulario">
        
        <div className="container-logo-perda">
            <img className="logo-ichei-formulario" src={logo} alt="logo-ichei" />
            <h1 className="titulo-reportar-perda">{t("reportarPerda")}</h1>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="name"
                    className="nome"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder={t("pessoaNome")}
                />
            </label>


            <label>
                <input
                    type="email"
                    name="email"
                    className="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder={t("email")}
                />
            </label>

            <label>
                <input
                    type="text"
                    name="local"
                    className='local'
                    value={formValues.local}
                    onChange={handleChange}
                    placeholder={t("objetoLocal")}
                />
            </label>

            <label>
                <input
                    type="date"
                    name="data"
                    value={formValues.data}
                    onChange={handleChange}
                />
            </label>

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
                    className='cor'
                    value={formValues.color}
                    onChange={handleChange}
                    placeholder={t("objetoCor")}
                />
            </label>

            <label>
                <input
                    type="text"
                    name="brand"
                    className='marca'
                    value={formValues.brand}
                    onChange={handleChange}
                    placeholder={t("objetoMarca")}
                />
            </label>

            <label>
                <textarea
                    type="text"
                    name="details"
                    className="detalhe"
                    value={formValues.details}
                    onChange={handleChange}
                    placeholder={t("objetoDetalhes")}
                />
            </label>

            



            <button className="enviar"type="submit">{t("enviar")}</button>
        </form>
        </div>
    );
};

export default ReportForm;