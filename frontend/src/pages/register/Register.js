import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/mainPage")
  }


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
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Nome Completo"
            />

            <input
              type="text"
              name="email"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Email"
            />

            <input
              type="phone-number"
              name="phone"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Telefone"
            />

            <input
              type="text"
              name="course"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Curso"
            />

            <input
              type="text"
              name="time"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Turno"
            />

            <input
              type="password"
              name="password"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Senha"
            />

            <input
              type="password"
              name="password"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Confirmação de Senha "
            />
          </div>

          <div className="flex flex-row justify-between">
            
            <button 
            onClick={handleRegister}
            className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
