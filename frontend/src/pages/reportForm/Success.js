import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/mainPage");
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%] pb-4">
            Seu reporte foi enviado com Sucesso!
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Seguiremos te informando por email.
          </h3>
          <button
            onClick={handleBackClick}
            className=" bg-emerald-950 text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
