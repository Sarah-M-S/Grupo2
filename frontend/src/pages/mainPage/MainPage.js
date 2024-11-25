import React, { useEffect, useState } from "react";

import LeftPanel from "./LeftPanel";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import FoundPanel from "./FoundPanel";
import ReportsPanel from "./ReportsPanel";
import UserPanel from "./UserPanel";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function MainPage() {
  const [display, setDisplay] = useState("found");
  const handleDisplay = (key) => {
    setDisplay(key);
  };
  const { dispatch } = useSearchContext();

  useEffect(() => {
    dispatch({
      display: null,
      category: null,
      date: null,
      place: null,
      search: null,
    });
  }, [display]);

  return (
    <div className="flex h-screen w-screen overflow-clip">
      {/* área da esquerda */}
      <LeftPanel state={display} onDisplayChange={handleDisplay} />

      {/* área principal */}
      <div className="flex flex-col h-screen w-screen">
        {/* area da pesquisa */}
        <div className="pl-64 py-8 flex items-center justify-center w-[full] bg-emerald-900">
          <div className="w-[40%]">
            <SearchBar display={display} />
          </div>
        </div>

        {/* lista */}
        <div className="flex justify-end h-full">
          <div className="flex flex-col pt-2 space-y-4 h-full w-[82%] px-16">
            {/* filtros */}
            <Filters display={display} />

            {/* items */}

            {/* cards de objeto */}
            {display === "found" && <FoundPanel display={display} />}

            {display === "reports" && <ReportsPanel display={display} />}

            {display === "users" && <UserPanel display={display} />}
          </div>
        </div>
      </div>
    </div>
  );
}
