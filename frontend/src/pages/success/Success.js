import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Success({message, route}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBackClick = () => {
    navigate(route);
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[100%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[160%] pb-4">
            {message}
          </h2>
          <button
            onClick={handleBackClick}
            className=" bg-emerald-950 text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
          >
            {t("voltar")}
          </button>
        </div>
      </div>
    </div>
  );
}
