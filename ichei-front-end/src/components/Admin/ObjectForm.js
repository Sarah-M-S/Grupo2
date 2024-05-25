import React, { useState } from 'react';

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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Objeto:
                <input
                    type="text"
                    name="object"
                    value={formValues.object}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Cor:
                <input
                    type="text"
                    name="color"
                    value={formValues.color}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Marca:
                <input
                    type="text"
                    name="brand"
                    value={formValues.brand}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Detalhes:
                <input
                    type="text"
                    name="details"
                    value={formValues.details}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Detalhes:
                <input
                    type="text"
                    name="details"
                    value={formValues.details}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Data:
                <input
                    type="date"
                    name="data"
                    value={formValues.data}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Local:
                <input
                    type="text"
                    name="local"
                    value={formValues.local}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <button type="submit">Enviar</button>
        </form>
    )
}


export default Add_Object;