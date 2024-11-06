import React from "react";

import FinalizeButton from "./FinalizeButton";
import RestartButton from "./RestartButton";

export default function DataConfirm({onRestart, onNext, dataToConfirm}) {

  const handleNext = () => {
    onNext();
  };

  const handleRestart = () => {
    onRestart();
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-2">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%] pb-4">
            Confirme seus dados
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Objeto: {dataToConfirm.object}
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Categoria: {dataToConfirm.category}
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Cor: {dataToConfirm.color}
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Marca: {dataToConfirm.brand} 
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Detalhes {dataToConfirm.details}
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Data {dataToConfirm.date}
          </h3>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Local {dataToConfirm.place} / {dataToConfirm.dependencie}
          </h3>
        </div>
      </div>

      <FinalizeButton onClick={handleNext} />
      <RestartButton onClick={handleRestart} />
    </div>
  );
}
