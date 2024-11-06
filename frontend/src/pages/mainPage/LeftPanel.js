import React from "react";

import logo from "../images/dark-logo.png";
import profile from "../images/profile.png";
import { useNavigate } from "react-router-dom";

export default function LeftPanel({ state, onDisplayChange }) {
  const navigate = useNavigate();

  const handleReportForm = () => {
    navigate("/reportForm");
  };

  const handleEditProfile = () => {
    navigate("/editProfile");
  };

  const handleAddFound = () => {
    navigate("/addFound");
  };

  const handleHelp = () => {
    // IMPLEMENTAR LOGOUT
    navigate("/help");
  };

  const handleLogout = () => {
    // IMPLEMENTAR LOGOUT
    navigate("/");
  };

  const handleDisplay = (key) => {
    onDisplayChange(key);
    console.log(key);
  };

  return (
    <div className="absolute h-screen w-[18%] bg-slate-50 rounded-r-3xl py-16 px-8">
      <div className="flex flex-col items-center h-full justify-around">
        <img src={logo} width="150" height="150" />

        <div className="flex flex-col items-center space-y-4">
          <img src={profile} />
          <h3 className="font-semibold text-emerald-950 text-xl">
            Fulano Cicrano
          </h3>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <button
            onClick={() => handleDisplay("found")}
            className={`font-semibold text-emerald-950 text-lg ${
              state === "found" ? "underline text-emerald-500" : ""
            }`}
          >
            Lista de Achados
          </button>

          <button
            onClick={() => handleDisplay("reports")}
            className={`font-semibold text-emerald-950 text-lg ${
              state === "reports" ? "underline text-emerald-500" : ""
            }`}
          >
            Lista de Reportes
          </button>

          <button
            onClick={() => handleDisplay("users")}
            className={`font-semibold text-emerald-950 text-lg ${
              state === "users" ? "underline text-emerald-500" : ""
            }`}
          >
            Lista de Usuários
          </button>

          <button
            onClick={handleAddFound}
            className="font-semibold text-emerald-950 text-lg"
          >
            Adicionar Achado
          </button>

          <button
            onClick={handleReportForm}
            className="font-semibold text-emerald-950 text-lg"
          >
            Reportar Perda
          </button>
          <button
            onClick={handleEditProfile}
            className="font-semibold text-emerald-950 text-lg"
          >
            Editar Perfil
          </button>
        </div>

        <div className="flex flex-row space-x-4 h-[30%] items-end">
          <button onClick={handleHelp}>Ajuda</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
