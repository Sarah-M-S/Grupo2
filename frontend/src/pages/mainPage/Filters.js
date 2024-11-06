import React from "react";

export default function Filters() {
  return (
    <div className="h-12 flex flex-row items-center space-x-8">
      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>Localização</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>Data de Encontro</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-16 rounded-3xl ">
        <p>Categoria</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-4 rounded-3xl ">
        <p>Aplicar</p>
      </button>

      <button className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-4 rounded-3xl ">
        <p>Redefinir</p>
      </button>
    </div>
  );
}
