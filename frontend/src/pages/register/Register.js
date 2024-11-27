import React, { useState } from "react";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";

export default function Register() {
  const regexEmail = /\S+@\S+\.\S+/;
  const phoneRegex = /^(\d{2})\s?(\d{4,5})-?(\d{4})$/;
  const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
  const navigate = useNavigate();
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
  const { courses } = useFetchValues();

  const handleRegister = (e) => {
    var error = false;
    e.preventDefault();

    if (formData.name === "" || !fullNameRegex.test(formData.name)) {
      error = true;
      alert("Preencher o Nome Completo");
    } else if (formData.email === "" || !regexEmail.test(formData.email)) {
      error = true;
      alert("Insira um e-mail válido");
    } else if (formData.phone === "" || !phoneRegex.test(formData.phone)) {
      error = true;
      alert("Insira um telefone válido");
    } else if (formData.course === "") {
      setFormData((prevData) => ({
        ...prevData,
        [formData.course]: null,
      }));
    } else if (formData.shift === "") {
      setFormData((prevData) => ({
        ...prevData,
        [formData.shift]: null,
      }));
    } else if (formData.password === "") {
      error = true;
      alert("Preencha a Senha");
    } else if (!passwordRegex.test(formData.password)) {
      error = true;
      alert(
        "A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma minúscula e um caractere especial"
      );
    } else if (formData.passwordConfirm === "") {
      error = true;
      alert("Preencha a Confirmação de Senha");
    } else if (formData.password !== formData.passwordConfirm) {
      error = true;
      alert("As senhas não coincidem");
    } else {
      alert("Cadastro realizado com sucesso");
    }
    if (!error) {
      registerUser(formData);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-10 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              {t("cadastro")}
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
              placeholder={t("nomeCompleto")}
            />

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder={t("email")}
            />

            <input
              type="phone-number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder={t("telefone")}
            />

            <select
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                {t("curso")}
              </option>

              {courses &&
                courses.curso.map((curso) => (
                  <option key={curso.id_curso} value={curso.id_curso}>
                    {curso.nome}
                  </option>
                ))}

              <option value="">{"Nenhum"}</option>
              {!courses && (
                <option value="" disabled hidden>
                  {t("curso")}
                </option>
              )}
            </select>

            <select
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="shift"
              value={formData.shift}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                {t("turno")}
              </option>
              <option value="1">{t("manhã")}</option>
              <option value="2">{t("tarde")}</option>
              <option value="3">{t("noite")}</option>
              <option value="4">{t("integral")}</option>
              <option value="">{"Nenhum"}</option>
            </select>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder={t("senha")}
            />

            <input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder={t("senhaConfirmacao")}
            />
          </div>

          <div className="flex flex-row justify-between">
            <button
              onClick={handleBack}
              className="bg-white rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-950"
            >
              {t("voltar")}
            </button>
            {!loading && (
              <button
                onClick={handleRegister}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                {t("cadastrar")}
              </button>
            )}

            {loading && (
              <button
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
                disabled
              >
                {t("carregando")}
              </button>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
