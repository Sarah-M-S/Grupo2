import React, { useState } from "react";

import ObjectCard from "../card/ObjectCard";
import LeftPanel from "./LeftPanel";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import UserCard from "../card/UserCard";

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
              <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Garrafa Azul", place:"Cantina", date:"01/01/2001"}}/>
              </div>
              }

              {display === "reports" && 
              <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaan", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              <ObjectCard object={{object:"Moletom de Couro", place:"aaaaa", date:"01/01/2001"}}/>
              </div>
              }

              {display === "users" && 
              <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"Admin", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              <UserCard user={{object:"Raul Garcia", place:"User", date:"01/01/2001"}}/>
              </div>
              }
            
          </div>
        </div>
      </div>
    </div>
  );
}
