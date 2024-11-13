import React, { useState } from "react";
import ObjectCard from "../card/ObjectCard";
import useFetchData from "../../hooks/useFetchData";
import UserCard from "../card/UserCard";
import { useTranslation } from "react-i18next";

export default function UserPanel() {
  const { loading, data } = useFetchData("/admin/list/usuarios");

  const { t } = useTranslation();

  return (
    <>
      {data && (
        <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {data.usuario.map((user) => (
              <li key={user.id_usuario}>
                <UserCard user={user}/>
              </li>
            ))}
          </ul>
        </div>
      )}
      {loading && <p>{t("carregando")}</p>}
    </>
  );
}