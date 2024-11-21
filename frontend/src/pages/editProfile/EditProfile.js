import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Success from "../success/Success";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";
import { useAuthContext } from "../../hooks/useAuthContext";
import useEditUser from "../../hooks/useEditUser";

export default function EditProfile() {
  const { payload } = useAuthContext();
  const location = useLocation();
  const { state } = location;
  const [formData, setFormData] = useState({
    userId: state.id_usuario,
    name: state.nome,
    email: state.email,
    type: state.admin,
    course: state.curso,
    shift: state.turno,
    phone: state.telefone,
  });
  const { editUser } = useEditUser();
  const { courses } = useFetchValues();
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const isDifferentUser = payload.user.id_usuario !== state.id_usuario;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    editUser(formData);
    setSent(true);
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        {sent && (
          <Success
            message={t("successMessage")}
            route={"/mainPage"}
          />
        )}

        {!sent && (
          <div className="flex flex-col w-full max-w-md space-y-8 bg-white rounded-3xl py-8 px-8 md:w-[30%]">
            <div>
              <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
                Editar Perfil
              </h2>
            </div>

            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`rounded-xl w-full h-8 px-4 text-emerald-950 font-semibold text-lg ${
                  isDifferentUser ? "bg-gray-200" : "bg-emerald-100"
                }`}
                required
                placeholder="Nome"
                disabled={isDifferentUser}
              />

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`rounded-xl w-full h-8 px-4 text-emerald-950 font-semibold text-lg ${
                  isDifferentUser ? "bg-gray-200" : "bg-emerald-100"
                }`}
                disabled={isDifferentUser}
                required
                placeholder="Email"
              />

              {payload.user.admin && (
                <select
                  className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value={false}>Normal</option>
                  <option value={true}>Admin</option>
                </select>
              )}

              <select
                className={`rounded-xl w-full h-8 px-4 text-emerald-950 font-semibold text-lg ${
                  isDifferentUser ? "bg-gray-200" : "bg-emerald-100"
                }`}
                disabled={isDifferentUser}
                name="course"
                value={+formData.course}
                onChange={handleChange}
                required
              >
                {courses &&
                  courses.curso.map((curso) => (
                    <option key={curso.id_curso} value={curso.id_curso}>
                      {curso.nome}
                    </option>
                  ))}
                {!courses && (
                  <option value="" disabled hidden>
                    Curso
                  </option>
                )}
              </select>

              <select
                className={`rounded-xl w-full h-8 px-4 text-emerald-950 font-semibold text-lg ${
                  isDifferentUser ? "bg-gray-200" : "bg-emerald-100"
                }`}
                disabled={isDifferentUser}
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
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`rounded-xl w-full h-8 px-4 text-emerald-950 font-semibold text-lg ${
                  isDifferentUser ? "bg-gray-200" : "bg-emerald-100"
                }`}
                disabled={isDifferentUser}
                required
                placeholder="Telefone"
              />
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
