import React from "react";

export default function ForwardButton({ onClick }) {
  return (
    <div className="flex flex-col w-full max-w-md space-y-12 bg-emerald-950 rounded-3xl py-2 px-8 md:w-[30%]">
      <button
        onClick={() => onClick()}
        className=" text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
      >
        Avançar
      </button>
    </div>
  );
}
