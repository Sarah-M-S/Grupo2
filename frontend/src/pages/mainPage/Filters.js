import React from "react";
import { useTranslation } from "react-i18next";

export default function Filters() {
  const { t } = useTranslation();
  return (
    <div className="h-12 flex flex-row items-center space-x-8">
      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>{t("local")}</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>{t("dataEncontro")}</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>{t("categoria")}</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-4 rounded-3xl ">
        <p>{t("aplicar")}</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-4 rounded-3xl ">
        <p>{t("redefinir")}</p>
      </button>
    </div>
  );
}
