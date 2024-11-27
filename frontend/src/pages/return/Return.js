import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../hooks/useSearchContext";
import useFetchData from "../../hooks/useFetchData";
import useFetchValues from "../../hooks/useFetchValues";
import SearchBar from "../mainPage/SearchBar";
import useGetReportsByUser from "../../hooks/useGetReportsByUser";
import useReturnItem from "../../hooks/useReturnItem";
import Success from "../success/Success";

export default function Return() {
  const { payload } = useAuthContext();
  const location = useLocation();
  const { state } = location;
  const { dispatch, search } = useSearchContext();
  const [url, setUrl] = useState("/admin/list/usuarios");
  const { loading, data } = useFetchData(url);
  const { places, colors, categories } = useFetchValues(
    state.item.local_encontro
  );
  const [selectedUser, setSelectedUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const { reports } = useGetReportsByUser(userId);
  const [selectedReport, setSelectedReport] = useState(null);
  const { returnItem } = useReturnItem();
  const [sent, setSent] = useState(false);
  const [submited, setSubmited] = useState(false);

  const navigate = useNavigate();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  const handleBack = () => {
    navigate("/mainPage");
  };

  const handleSubmit = () => {
    setSubmited(true);
  };

  const handleCancel = () => {
    setSelectedUser(null);
    setSelectedReport(null);
    setUserId(null);
    setSubmited(false);
  };

  const handleSend = () => {
    const currentDate = new Date();
    const isoDate = currentDate.toISOString();
    var devolucao = {
      reporte: selectedReport ? selectedReport.id_item : "",
      achado: state.item.id_item,
      dataDevolucao: isoDate,
      resgatante: selectedUser.id_usuario,
      funcionario: payload.user.id_usuario,
    };
    setSent(true);
    returnItem(devolucao);
  };

  useEffect(() => {
    const query = search
      ? `/admin/search/usuario/?nome=${search}`
      : "/admin/list/usuarios";
    setUrl(query);
  }, [search]);

  useEffect(() => {
    if (selectedUser) {
      setUserId(selectedUser.id_usuario);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (selectedReport) {
      if (selectedReport.usuario_perda !== selectedUser.id_usuario) {
        setSelectedReport(null);
      }
    }
  }, [selectedUser, selectedReport]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-row items-center justify-center space-x-4">
        {sent && (
          <Success
            message={"Objeto devolvido com sucesso"}
            route={"/mainPage"}
          />
        )}

        {submited && !sent && (
          <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[100%]">
              <div className="flex flex-col space-y-8">
                <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[160%] pb-4">
                  Tem certeza que quer devolver {state.item.titulo} para{" "}
                  {selectedUser.nome} ?
                </h2>
                <div className="flex flex-row w-full justify-between">
                  <button
                    onClick={handleCancel}
                    className=" bg-white w-[40%] text-emerald-950 rounded-full py-2 px-2 text-lg font-bold"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSend}
                    className=" bg-emerald-950 w-[40%] text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
                  >
                    Devolver
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!sent && !submited && (
          <div className="h-[90%] w-full flex flex-row items-center justify-center space-x-4">
            <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[100%]">
              <div className="flex flex-col space-y-2">
                <h2 className="font-bold">{state.item.titulo}</h2>
                <p>
                  Cor:{" "}
                  {colors
                    ? colors.cor.find((cor) => cor.id_cor === +state.item.cor)
                        .nome
                    : ""}
                </p>

                <p>
                  Categoria:{" "}
                  {categories
                    ? categories.categorias.find(
                        (categoria) =>
                          categoria.id_categoria === +state.item.categoria
                      ).nome
                    : ""}
                </p>

                <p>Marca: {state.item.marca}</p>

                <p>Data entrada: {formatDate(state.item.data_entrada)}</p>
                <p>Descrição: {state.item.descricao}</p>
                <p>
                  Local de Encontro:{" "}
                  {places
                    ? places.locais.find(
                        (place) => place.id_local === +state.item.local_encontro
                      ).titulo
                    : ""}{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full max-w-md space-y-4 bg-white rounded-3xl py-8 px-2 md:w-[100%]">
              <div className="flex flex-col mx-2">
                <SearchBar />
              </div>

              <div className="mx-4">
                <h2>Usuários</h2>
              </div>

              <div className="flex h-32 w-full overflow-clip px-2 ">
                {data && (
                  <div className="h-full w-full flex flex-col space-y-2 overflow-y-auto bg-emerald-100 rounded-2xl">
                    <ul className=" py-1 space-y-1">
                      {data &&
                        data.usuario.map((user) => (
                          <li
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            className={`cursor-pointer px-2 ${
                              selectedUser &&
                              selectedUser.id_usuario === user.id_usuario
                                ? "border-2 border-emerald-950 rounded-2xl"
                                : ""
                            }`}
                          >
                            {user.nome}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mx-4">
                <h2>Reportes</h2>
              </div>

              {reports && (
                <div className="bg-emerald-100 rounded-2xl mx-2 px-2">
                  <ul>
                    {reports.itens.map((item) => (
                      <li
                        key={item.id_item}
                        onClick={() => setSelectedReport(item)}
                        className={`cursor-pointer px-2 ${
                          selectedReport &&
                          selectedReport.id_item === item.id_item
                            ? "border-2 border-emerald-950 rounded-2xl"
                            : ""
                        }`}
                      >
                        {item.titulo}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                disabled={!selectedUser}
                onClick={handleSubmit}
                className={`rounded-2xl py-2 px-12 text-lg font-semibold ${
                  selectedUser
                    ? "bg-emerald-950 text-emerald-500"
                    : "bg-gray-500 text-gray-300"
                }`}
              >
                Devolver
              </button>
              <button
                onClick={handleBack}
                className="bg-white text-emerald-600 font-bold"
              >
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
