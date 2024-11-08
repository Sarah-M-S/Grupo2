import React, { useState } from "react";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  const { registerUser, loading, error } = useRegister();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    shift: "",
    password: "",
    passwordConfirm: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-10 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Cadastro
            </h2>
          </div>

          <div className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Nome Completo"
            />

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Email"
            />

            <input
              type="phone-number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Telefone"
            />

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Curso"
            />

            <select
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="shift"
              value={formData.shift}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Turno
              </option>
              <option value="1">Manhã</option>
              <option value="2">Tarde</option>
              <option value="3">Noite</option>
              <option value="4">Integral</option>
            </select>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Senha"
            />

            <input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Confirmação de Senha "
            />
          </div>

          <div className="flex flex-row justify-between">
            {!loading && (
              <button
                onClick={handleRegister}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                Cadastrar
              </button>
            )}
            {loading && (
              <button
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
                disabled
              >
                loading
              </button>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
