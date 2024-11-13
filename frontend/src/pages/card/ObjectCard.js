import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ObjectCard({object}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Primeiro card (expandido por padrão) */}
      <div className={`w-full p-4 bg-white rounded-3xl shadow-md transition-all duration-100 ${isExpanded ? "h-24" : "h-16"}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{object.object}</h2>
          <button onClick={toggleCard} className="text-emerald-500">
            {isExpanded ? "Menos" : "Detalhes"}
          </button>
        </div>
        {isExpanded && (
          <div className="mt-4 flex flex-row space-x-16">
            <p>{t("local")}: {object.place}</p>
            <p>{t("dataEncontro")}: {object.date}</p>
          </div>
        )}
      </div>

    </div>
  );
}
