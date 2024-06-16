import React, { useState } from 'react';
import './Style/ReportForm.css';
import logo from './Style/img/logo-ichei.png';
import { useTranslation } from "react-i18next";
import InputMask from 'react-input-mask';





const ReportForm = () => {

    const [formValues, setFormValues] = useState({
        nome: '',
        tituloItem: '',
        email: '',
        descricao: '',
        marca: '',
        categoria: '',
        curso: '',
        periodo: '',
        cor: '',
        local: '',
        dataPerda: '',
    });

    const [envioSucesso, setEnvioSucesso] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }
    ))

};




    const handleSubmit = (e) => {
        e.preventDefault();
        
        const itemPerdido = {
            "itemPerdido": {
                nome: formValues.nome,
                tituloItem: formValues.tituloItem,
                email: formValues.email,
                descricao: formValues.descricao,
                marca: formValues.marca,
                categoria: formValues.categoria,
                curso: formValues.curso,
                periodo: formValues.periodo,
                cor: formValues.cor,
                local: formValues.local,
                dataPerda: formValues.dataPerda,
            }
        };


        

        console.log(itemPerdido);
        fetch('http://localhost:8083/cadastrarPerda', {
            method: 'POST',
            body: JSON.stringify(itemPerdido),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Resposta do servidor:', data);
                setEnvioSucesso(true);
            })
            .catch((error) => {
                console.error('Erro na requisição:', error.message);
            });



    };
    const { t } = useTranslation();




    return (
        
        <div className="container-formulario">
        
        <div className="container-logo-perda">
            <img className="logo-ichei-formulario" src={logo} alt="logo-ichei" />
            <h1 className="titulo-reportar-perda">{t("reportarPerda")}</h1>
        </div>
        

        <form className="formulario" onSubmit={handleSubmit}>
        {envioSucesso && <p id="mensagem-sucesso">Envio realizado com sucesso!</p>}

            <label>
                <input
                    type="text"
                    name="nome"
                    className="nome"
                    value={formValues.nome}
                    onChange={handleChange}
                    placeholder={t("pessoaNome")}
                    maxLength={50}
                    required
                    
                />
                
            </label>

            <label>
                <input
                    type="email"
                    name="email"
                    className='email'
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder={t("email")}
                    maxLength={50}
                    required
                />
            </label>

            <label>
                <input
                    type="text"
                    name="curso"
                    className="detalhe"
                    value={formValues.curso}
                    onChange={handleChange}
                    placeholder={t("curso")}
                    maxLength={50}
                    required
                />
            </label>


            <label>
                <input
                    type="text"
                    name="periodo"
                    className='cor'
                    value={formValues.periodo}
                    onChange={handleChange}
                    placeholder={t("turno")}
                    maxLength={20}
                    required
                />
            </label>


            <label>
                <input
                    type="text"
                    name="tituloItem"
                    className="email"
                    value={formValues.tituloItem}
                    onChange={handleChange}
                    placeholder={t("objetoNome")}
                    maxLength={50}
                    required
                />
            </label>

            <label>
                <input
                    type="text"
                    name="cor"
                    className='marca'
                    value={formValues.cor}
                    onChange={handleChange}
                    placeholder={t("objetoCor")}
                    maxLength={20}
                    required
                />
            </label>

            <label>
                <input
                    type="text"
                    name="marca"
                    className='cor'
                    value={formValues.marca}
                    onChange={handleChange}
                    placeholder={t("objetoMarca")}
                    maxLength={50}
                    required
                />
            </label>
    
            <label>
        <select
            name="categoria"
            className="detalhe-objeto-admin"
            value={formValues.categoria}
            onChange={handleChange}
            required
        >
            <option value="" disabled>
            {t("objetoCategoria")}
            </option>
            <option value="roupa">Roupas</option>
            <option value="acessorio">Acessórios</option>
            <option value="documento">Carteiras/Documentos/Cartões</option>
            <option value="garrafa">Garrafas</option>
            <option value="caderno">Cadernos/Livros/Agendas</option>
            <option value="guardachuva">Guarda chuva</option>
            <option value="outros">Outros</option>
        </select>
        </label>
        

        <label>
            <InputMask 
                    mask="99/99/9999" 
                    name="dataPerda"
                    placeholder={"00/00/0000"}
                    value={formValues.dataPerda}
                    onChange={handleChange}
                    maxLength={20}
                    required
                />
            </label>

            <label>
                <input
                    type="text"
                    name="local"
                    className='detalhe'
                    value={formValues.local}
                    onChange={handleChange}
                    placeholder={t("objetoLocal")}
                    maxLength={20}
                    required
                />
            </label>


            <label>
                <textarea
                    type="text"
                    name="descricao"
                    className="detalhe"
                    value={formValues.descricao}
                    onChange={handleChange}
                    placeholder={t("objetoDetalhes")}
                    maxLength={100}
                    required
                />
            </label>


            <button className="enviar" type="submit">{t("enviar")}</button>
            
            
        </form>
        </div>
    );
};

export default ReportForm;