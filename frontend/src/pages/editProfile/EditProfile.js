import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../success/Success";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    
    if (!formData.name || !formData.email || !formData.password || !formData.type) {
      setError("Todos os campos são obrigatórios!");
      return; // Prevent submission if any field is empty
    }

    // Reset error if validation passes
    setError("");
    
    
    console.log(formData);
    setSent(true)
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">

        {sent && <Success 
        message={"Suas informações foram atualizadas com sucesso!"}
        route={"/mainPage"}/>}

        {!sent &&

        <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Editar Perfil
            </h2>
          </div>
          
          {error && <div className="text-red-500 text-center">{error}</div>}

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder="Nome"
            />

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder="Email "
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder="Senha"
            />

            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="normal">Normal</option>
              <option value="admin">Admin</option>
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
        }
      </div>
    </div>
  );
}
