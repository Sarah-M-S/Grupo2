import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const buttonRef = useRef(null);
  const { login, error, loading } = useLogin();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    var error = false;
    if (formData.email === "") {
      error = true;
      alert("Preencha o Email");
    }

    if (formData.password === "") {
      error = true;
      alert("Preencha a Senha");
    }

    if (!error) {
      login(formData.email, formData.password);
    }
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("Há problemas com as credenciais.");
    } else {
      setErrorMessage("");
    }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              {t("login")}
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
              placeholder={t("login")}
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder={t("senha")}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center font-semibold">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <button
                onClick={handleForgotPassword}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                {t("esqueciSenha")}
              </button>
              <button
                ref={buttonRef}
                onClick={handleLogin}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                {t("entrar")}
              </button>
            </div>
            <div>
              <button
                onClick={handleRegister}
                className="text-emerald-950 rounded-full px-2 text-sm font-semibold"
              >
                {t("signIn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
