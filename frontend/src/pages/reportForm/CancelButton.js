import React from "react";

export default function CancelButton({ onClick }) {
  return (
    <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-2 px-8 md:w-[30%]">
      <button
        className="text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
        onClick={ onClick }
      >
        Cancelar
      </button>
    </div>
  );
}
