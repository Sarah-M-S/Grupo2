import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function LoginPage() {
  const { login, error, loading } = useLogin()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForgotPassword = () => {
    navigate("/forgotPassword");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Login
            </h2>
          </div>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder="Login"
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
          </div>

          <div className="flex flex-row justify-between">
            <button
              onClick={handleForgotPassword}
              className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
            >
              Esqueci minha senha
            </button>
            <button
              onClick={handleLogin}
              className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
