import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchValues from "../../hooks/useFetchValues";
import usePostNewLocal from "../../hooks/usePostNewLocal";

export default function AddLocalAndDependencie() {
  const { places } = useFetchValues();
  const { postNewLocal } = usePostNewLocal();
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    place: "",
    newPlace: "",
    dependencie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  const handleSubmitt = () => {
    postNewLocal(formData)
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Adicionar Local e Dependencia
            </h2>
          </div>

          <div className="flex flex-col space-y-4">
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="place"
              value={formData.place}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Local
              </option>

              {places &&
                places.locais.map((place) => (
                  <option key={place.id_local} value={place.id_local}>
                    {place.titulo}
                  </option>
                ))}
              <option value="new">Novo Local</option>
              {!places && (
                <option value="" disabled hidden>
                  Local
                </option>
              )}
            </select>

            {formData.place === "new" && (
              <input
                type="text"
                name="newPlace"
                value={formData.newPlace}
                onChange={handleChange}
                placeholder={"Novo Local"}
                className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                required
              />
            )}

            <input
              type="text"
              name="dependencie"
              value={formData.dependencie}
              onChange={handleChange}
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              placeholder={"Dependência"}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <button
                onClick={handleCancel}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                Cancelar
              </button>
              <button
                ref={buttonRef}
                onClick={handleSubmitt}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
