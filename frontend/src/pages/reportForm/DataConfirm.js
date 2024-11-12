import React, { useState } from "react";

import FinalizeButton from "./FinalizeButton";
import RestartButton from "./RestartButton";
import useFetchValues from "../../hooks/useFetchValues";

export default function DataConfirm({ onRestart, onNext, dataToConfirm, isSubmitting, error }) {
  const { categories, colors, places, dependencies } = useFetchValues(
    dataToConfirm.place
  );

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
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Objeto: {dataToConfirm.object}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Categoria: {categories ? categories.categorias.find(cat => cat.id_categoria === +dataToConfirm.category).nome : ""}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Cor: {colors ? colors.cor.find(color => color.id_cor === +dataToConfirm.color).nome : ""}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Marca: {dataToConfirm.brand}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Detalhes: {dataToConfirm.details ? dataToConfirm.details : "Sem detalhes informados"}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Data: {dataToConfirm.date}
          </h3>
          <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Local: {places ? places.locais.find(place => place.id_local === +dataToConfirm.place).titulo : ""} / 
            {dependencies ? dependencies.dependencias.find(dependencie => dependencie.id_dependencia === +dataToConfirm.dependencie).titulo : ""}
          </h3>
        </div>
      </div>
      {isSubmitting && (
        <p>Enviando</p>
      )}
      {error && (
        <p>{error}</p>
      )}
      

      <FinalizeButton onClick={handleNext} />
      <RestartButton onClick={handleRestart} />
    </div>
  );
}
