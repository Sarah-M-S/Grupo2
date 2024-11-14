import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import UserCard from "../card/UserCard";
import { useTranslation } from "react-i18next";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function UserPanel() {
  const { t } = useTranslation();
  const { dispatch, search, display } = useSearchContext();
  const [url, setUrl] = useState("/admin/list/usuarios");
  const { loading, data } = useFetchData(url);

  console.log(data)

  useEffect(() => {
    if (display === "users") {
      const query = search ? `/admin/search/usuario/?nome=${search}` : "/admin/list/usuarios";
      setUrl(query);
    }
    return () => {
      dispatch({search: null, display: null})
    };
  }, [search, display]);

  return (
    <>
      {data && (
        <div className="max-h-[70%] h-[70%] w-full flex flex-col space-y-2 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {data.usuario.map((user) => (
              <li key={user.id_usuario}>
                <UserCard user={user} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {loading && <p>{t("carregando")}</p>}
    </>
  );
}
