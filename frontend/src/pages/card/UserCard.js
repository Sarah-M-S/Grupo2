import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function UserCard({user}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  console.log(user)

  const handleEdit = () => {
    navigate("/editProfile", {state: user})
  }

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Primeiro card (expandido por padrão) */}
      <div className={`w-full p-4 bg-white rounded-3xl shadow-md transition-all duration-100 ${isExpanded ? "h-24" : "h-16"}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{user.nome}</h2>
          <button onClick={toggleCard} className="text-emerald-500">
            {isExpanded ? "Menos" : "Detalhes"}
          </button>
        </div>
        {isExpanded && (
          <div className="mt-4 flex flex-row space-x-16">
            <p>{t("email")}: {user.mail}</p>
            <p>{t("telefone")}: {user.phone}</p>
            <button onClick={handleEdit}>{t("editar")}</button>
          </div>
        )}
      </div>

    </div>
  );
}
