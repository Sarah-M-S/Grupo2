import React, { useState } from 'react';
import './Style/ReportForm.css';
import logo from './Style/img/logo-ichei.png';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
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
            })
            .catch((error) => {
                console.error('Erro na requisição:', error.message);
            });



    };

    return (
        <div className="container-formulario">
        
        <div className="container-logo-perda">
            <img className="logo-ichei-formulario" src={logo} alt="logo-ichei" />
            <h1 className="titulo-reportar-perda">Reportar Perda</h1>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="nome"
                    className="nome"
                    value={formValues.nome}
                    onChange={handleChange}
                    placeholder='Nome'
                />
            </label>


            <label>
                <input
                    type="text"
                    name="tituloItem"
                    className="email"
                    value={formValues.tituloItem}
                    onChange={handleChange}
                    placeholder='Titulo Item'
                />
            </label>

            <label>
                <input
                    type="email"
                    name="email"
                    className='email'
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder='Email'
                />
            </label>

            <label>
                <textarea
                    type="text"
                    name="descricao"
                    className="detalhe"
                    value={formValues.descricao}
                    onChange={handleChange}
                    placeholder='Descrição'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="marca"
                    className='cor'
                    value={formValues.marca}
                    onChange={handleChange}
                    placeholder='Marca'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="categoria"
                    className='marca'
                    value={formValues.categoria}
                    onChange={handleChange}
                    placeholder='Categoria'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="curso"
                    className="detalhe"
                    value={formValues.curso}
                    onChange={handleChange}
                    placeholder='Curso'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="periodo"
                    className='cor'
                    value={formValues.periodo}
                    onChange={handleChange}
                    placeholder='Período'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="cor"
                    className='marca'
                    value={formValues.cor}
                    onChange={handleChange}
                    placeholder='Cor'
                />
            </label>

            <label>
                <input
                    type="text"
                    name="local"
                    className="detalhe"
                    value={formValues.local}
                    onChange={handleChange}
                    placeholder='Local'
                />
            </label>

            
            <label>
                <input
                    type="date"
                    name="dataPerda"
                    value={formValues.dataPerda}
                    onChange={handleChange}
                />
            </label>


            <button className="enviar"type="submit">Enviar</button>
        </form>
        </div>
    );
};

export default ReportForm;