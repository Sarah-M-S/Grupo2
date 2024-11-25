import React from "react";
import ForwardButton from "./ForwardButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Disclaimer({ onNext }) {
  const navigate = useNavigate()
  const handleNext = () => {
    onNext();
  };

  const handleBack = () => {
    navigate("/mainPage")
  }

  const { t } = useTranslation();

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            {t("disclaimerText1")}
          </h2>
          <h2 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            <b>{t("disclaimerText2")}</b>
          </h2>
        </div>
      </div>

      <ForwardButton onClick={handleNext} />
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-2 px-8 md:w-[30%]">
        <button 
        className="text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
        onClick={handleBack}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
