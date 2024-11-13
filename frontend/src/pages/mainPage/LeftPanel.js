import React, { useContext } from "react";

import logo from "../images/dark-logo.png";
import profile from "../images/profile.png";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTranslation } from "react-i18next";

export default function LeftPanel({ state, onDisplayChange }) {
  const { logout } = useLogout();
  const { payload } = useAuthContext();
  const navigate = useNavigate();

  const handleReportForm = () => {
    navigate("/reportForm");
  };

  const handleEditProfile = () => {
    navigate("/editProfile", { state: payload.user });
  };

  const handleAddFound = () => {
    navigate("/addFound");
  };

  const handleAddLocalAndDependencie = () => {
    navigate("/addLocalAndDependencie");
  };

  const handleHelp = () => {
    // IMPLEMENTAR LOGOUT
    navigate("/help");
  };

  const handleDisplay = (key) => {
    onDisplayChange(key);
  };

  const { t } = useTranslation();

  return (
    <div className="absolute h-screen w-[18%] bg-slate-50 rounded-r-3xl py-16 px-8">
      <div className="flex flex-col items-center h-full justify-around">
        <img src={logo} width="150" height="150" />

        <div className="flex flex-col items-center space-y-4">
          <img src={profile} />
          <h3 className="font-semibold text-emerald-950 text-xl">
            {payload.user.nome}
          </h3>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <button
            onClick={() => handleDisplay("found")}
            className={`font-semibold text-emerald-950 text-lg ${
              state === "found" ? "underline text-emerald-500" : ""
            }`}
          >
            {t("listaAchados")}
          </button>

          {payload.user.admin && (
            <button
              onClick={() => handleDisplay("reports")}
              className={`font-semibold text-emerald-950 text-lg ${
                state === "reports" ? "underline text-emerald-500" : ""
              }`}
            >
              {t("listaReportes")}
            </button>
          )}

          {payload.user.admin && (
            <button
              onClick={() => handleDisplay("users")}
              className={`font-semibold text-emerald-950 text-lg ${
                state === "users" ? "underline text-emerald-500" : ""
              }`}
            >
              {t("listaUsuarios")}
            </button>
          )}

          {payload.user.admin && (
            <button
              onClick={handleAddFound}
              className="font-semibold text-emerald-950 text-lg"
            >
              {t("adicionarAchado")}
            </button>
          )}

          {payload.user.admin && (
            <button
              onClick={handleAddLocalAndDependencie}
              className="font-semibold text-emerald-950 text-lg"
            >
              Adicionar Local e Dependencia
            </button>
          )}

          <button
            onClick={handleReportForm}
            className="font-semibold text-emerald-950 text-lg"
          >
            {t("reportarPerda")}
          </button>
          <button
            onClick={handleEditProfile}
            className="font-semibold text-emerald-950 text-lg"
          >
            {t("editarPerfil")}
          </button>
        </div>

        <div className="flex flex-row space-x-4 h-[30%] items-end">
          <button onClick={handleHelp}>{t("ajuda")}</button>
          <button onClick={logout}>{t("logout")}</button>
        </div>
      </div>
    </div>
  );
}
