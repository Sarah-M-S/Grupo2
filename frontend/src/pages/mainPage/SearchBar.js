import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "../images/search.png";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function SearchBar({ display }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch, search } = useSearchContext();

  const handleSearch = () => {
    return dispatch({ display: display, search: searchQuery !== "" ? searchQuery : null });
  };

  useEffect(() => {
    if (!search) {
      setSearchQuery("");
    }
  }, [search]);

  return (
        <div className="rounded-full h-10 w-[100%] px-4 bg-emerald-100 text-emerald-950 font-semibold text-md flex flex-row justify-between">
          <input
            type="text"
            name="name"
            className="w-full bg-emerald-100 text-emerald-950 focus:outline-none focus:bg-emerald-100"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder={t("pesquisar")}
          />
          <button onClick={handleSearch}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
  );
}
