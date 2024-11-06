import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../register/Success";

export default function AddFoundForm() {
  const [formData, setFormData] = useState({
    category: "",
    object: "",
    color: "",
    brand: "",
    date: "",
    place: "",
    dependencie: "",
    details: "",
  });
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
    setSent(true);
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        {sent && <Success message={"Objeto adicionado com sucesso!"}/>}

        {!sent && (
          <div className="flex flex-col w-full max-w-md space-y-8 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
            <div>
              <h2 className="text-xl text-center font-semibold text-emerald-500 md:text-[180%]">
                Adicionar Achado
              </h2>
            </div>

            <div className="flex flex-col space-y-2">
              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Categoria
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="object"
                value={formData.object}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Objeto
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="color"
                value={formData.color}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Cor
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <input
                type="text"
                name="brand"
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                value={formData.brand}
                onChange={handleChange}
                required
                placeholder="Marca"
              />

              <input
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="place"
                value={formData.place}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Bloco
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="dependencie"
                value={formData.dependencie}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Dependência
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="flex flex-row justify-between">
              <button
                onClick={handleCancel}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                Salvar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
