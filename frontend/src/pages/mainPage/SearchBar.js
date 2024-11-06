import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-end min-h-24 bg-emerald-600">
      <div className="flex items-center justify-center w-[82%]">
        <input
          type="text"
          name="name"
          className="rounded-full h-10 w-[60%] px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
          required
          placeholder="Pesquisar"
        />
      </div>
    </div>
  );
}
