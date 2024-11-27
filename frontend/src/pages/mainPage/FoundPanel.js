import React, { useEffect, useState } from "react";
import ObjectCard from "../card/ObjectCard";
import useFetchData from "../../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function FoundPanel({ onDelete }) {
  const { t } = useTranslation();
  const { dispatch, search, category, date, place } = useSearchContext();
  const [url, setUrl] = useState("/list/item/achados");
  const { loading, data } = useFetchData(url);


  useEffect(() => {
    let query = "/list/item/achados/filtro?";
    if (search) query += `titulo=${search}&`;
    if (category) query += `categoria=${category}&`;
    if (date) query += `data_entrada=${date}&`;
    if (place) query += `local_encontro=${place}&`;

    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }

    if (query === "/list/item/achados/filtro?") {
      query = "/list/item/achados";
    }

    setUrl(query);
  }, [search, category, date, place]);

  return (
    <>
      {data && (
        <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {data.itens.map((item) => (
              <li key={item.id_item}>
                <ObjectCard
                  object={{
                    item,
                  }}
                  panel={"found"}
                  onDelete={onDelete}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {loading && <p>{t("carregando")}</p>}
    </>
  );
}
