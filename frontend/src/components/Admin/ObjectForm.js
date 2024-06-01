import React, { useState } from "react";
import "./Style/ObjectForm.css";

import { useTranslation } from "react-i18next";

function ObjectForm() {
  const [formValues, setFormValues] = useState({
    tituloItem: "",
    descricao: "",
    marca: "",
    categoria: "",
    cor: "",
    local: "",
    dataCadastro: "",
    registrador: "",
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
    const itemCadastrado = {
      itemCadastrado: {
        tituloItem: formValues.tituloItem,
        descricao: formValues.descricao,
        marca: formValues.marca,
        categoria: formValues.categoria,
        cor: formValues.cor,
        local: formValues.local,
        dataCadastro: formValues.dataCadastro,
        registrador: formValues.registrador,
      },
    };

    fetch("http://localhost:8083/cadastrarItem", {
      method: "POST",
      body: JSON.stringify(itemCadastrado),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error.message);
      });
  };

  const { t } = useTranslation();

  return (
    <div className="container-formulario-objeto-admin">
      <form className="formulario-objeto-admin" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="tituloItem"
            className="objeto"
            value={formValues.tituloItem}
            onChange={handleChange}
            placeholder={t("objetoNome")}
          />
        </label>

        <label>
          <textarea
            type="text"
            name="descricao"
            className="detalhe-objeto-admin"
            value={formValues.descricao}
            onChange={handleChange}
            placeholder={t("objetoDetalhes")}
          />
        </label>

        <label>
          <input
            type="text"
            name="marca"
            className="marca-objeto-admin"
            value={formValues.marca}
            onChange={handleChange}
            placeholder={t("objetoMarca")}
          />
        </label>

        <label>
          <select
            name="categoria"
            className="detalhe-objeto-admin"
            value={formValues.categoria}
            onChange={handleChange}
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
          <input
            type="text"
            name="cor"
            className="detalhe-objeto-admin"
            value={formValues.cor}
            onChange={handleChange}
            placeholder={t("objetoCor")}
          />
        </label>

        <label>
          <input
            type="text"
            name="local"
            className="detalhe-objeto-admin"
            value={formValues.local}
            onChange={handleChange}
            placeholder={t("objetoLocal")}
          />
        </label>

        <label>
          <input
            type="date"
            name="dataCadastro"
            className="data-objeto-admin"
            value={formValues.dataCadastro}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            name="registrador"
            className="local-objeto-admin"
            value={formValues.registrador}
            onChange={handleChange}
            placeholder={t("registrador")}
          />
        </label>

        <button className="btn-enviar-objeto-admin" type="submit">
          {t("enviar")}
        </button>
      </form>
    </div>
  );
}

export default ObjectForm;
