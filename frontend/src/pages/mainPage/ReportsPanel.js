import React, { useEffect, useState } from "react";
import ObjectCard from "../card/ObjectCard";
import useFetchData from "../../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function ReportsPanel() {
  const { t } = useTranslation();
  const { dispatch, search, category, date, place } = useSearchContext();
  const [url, setUrl] = useState("/admin/list/item/perdidos");
  const { loading, data } = useFetchData(url);

  useEffect(() => {
    let query = "/admin/list/item/perdidos/filtro?";
    if (search) query += `nome=${search}&`;
    if (category) query += `categoria=${category}&`;
    if (date) query += `data_perda=${date}&`;
    if (place) query += `local_perda=${place}&`;

    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }

    if (query === "/admin/list/item/perdidos/filtro?") {
      query = "/admin/list/item/perdidos";
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
                  isFound={false}
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
