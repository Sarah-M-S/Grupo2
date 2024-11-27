import React, { useState } from "react";
import Success from "../success/Success";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import useChangePassword from "../../hooks/useChangePassword";

export default function ChangePassword() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
  const [sent, setSent] = useState();
  const navigate = useNavigate();
  const { payload } = useAuthContext();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const { changePassword } = useChangePassword();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate("/mainPage");
  };

  const handleChangePassword = () => {
    var error = false;
    if (formData.newPassword === "") {
      error = true;
      alert("Preencha a Senha");
    } else if (!passwordRegex.test(formData.newPassword)) {
      error = true;
      alert(
        "A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma minúscula e um caractere especial"
      );
    } else if (formData.confirmNewPassword === "") {
      error = true;
      alert("Preencha a Confirmação de Senha");
    } else if (formData.newPassword !== formData.confirmNewPassword) {
      error = true;
      alert("As senhas não coincidem");
    }

    if (!error) {
      const usuario = {
        idUsuario: payload.user.id_usuario,
        senha: formData.newPassword,
      };
      changePassword(usuario);
      setSent(true);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        {sent && (
          <Success
            message={"Senha alterada com sucesso!"}
            route={"/mainPage"}
          />
        )}

        {!sent && (
          <div className="flex flex-col w-full max-w-md space-y-4 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Mudança de Senha
            </h2>

            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder={"Nova Senha"}
            />

            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder={"Confirmar Nova Senha"}
            />

            <div className="flex flex-row justify-between">
              <button
                onClick={handleBack}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                {"Voltar"}
              </button>
              <button
                onClick={handleChangePassword}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                {"Mudar Senha"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
