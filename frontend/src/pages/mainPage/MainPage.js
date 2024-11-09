import React, { useState } from "react";

import ObjectCard from "../card/ObjectCard";
import LeftPanel from "./LeftPanel";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import UserCard from "../card/UserCard";
import FoundPanel from "./FoundPanel";
import useFetchData from "../../hooks/useFetchData";
import ReportsPanel from "./ReportsPanel";
import UserPanel from "./UserPanel";

export default function MainPage() {
  const [display, setDisplay] = useState("found");
  

  const handleDisplay = (key) => {
    setDisplay(key)
  };


  return (
    <div className="flex h-screen w-screen overflow-clip">
      {/* área da esquerda */}
      <LeftPanel state={display} onDisplayChange={handleDisplay}/>

      {/* área principal */}
      <div className="flex flex-col h-screen w-screen">

        {/* area da pesquisa */}
        <SearchBar />

        {/* lista */}
        <div className="flex justify-end h-full">
          <div className="flex flex-col pt-2 space-y-4 h-full w-[82%] px-16">

            {/* filtros */}
            <Filters />

            {/* items */}
            
              {/* cards de objeto */}
              {display === "found" && 
                <FoundPanel/>
              }

              {display === "reports" && 
              <ReportsPanel />
              }

              {display === "users" && 
              <UserPanel />
              }
            
          </div>
        </div>
      </div>
    </div>
  );
}
