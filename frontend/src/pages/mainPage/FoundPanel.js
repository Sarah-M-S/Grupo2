import React, { useState } from "react";
import ObjectCard from "../card/ObjectCard";
import useFetchData from "../../hooks/useFetchData";
import { useTranslation } from "react-i18next";

export default function FoundPanel() {
  const { loading, data } = useFetchData("/list/item/achados");

  const { t } = useTranslation();

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
                  isFound={true}
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
