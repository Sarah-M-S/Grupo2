import React, { useState } from "react";
import ObjectCard from "../card/ObjectCard";
import useFetchData from "../../hooks/useFetchData";

export default function FoundPanel() {
  const { loading, data } = useFetchData("/list/item/achados");

  return (
    <>
      {data && (
        <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {data.itens.map((item) => (
              <li key={item.id_item}>
                <ObjectCard
                  object={{
                    object: item.titulo,
                    place: item.local_perda,
                    date: item.data_perda,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {loading && <p>loading</p>}
    </>
  );
}
