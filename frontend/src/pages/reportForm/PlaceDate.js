import React, { useState } from "react";

import ForwardButton from "./ForwardButton";

import { useTranslation } from "react-i18next";

export default function PlaceDate({ onNext }) {
  const [formData, setFormData] = useState({
    date: "",
    place: "",
    dependencie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { t } = useTranslation();

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%]">
            {t("localData")}
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            {t("dataPerda")}
          </h3>

          <div className="flex flex-col space-y-4">
            <input
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("localPerda")}
            </h3>
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="place"
              value={formData.place}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
              {t("bloco")}
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="dependencie"
              value={formData.dependencie}
              onChange={handleChange} 
            >
              <option value="" disabled hidden>
              {t("dependencia")}
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>

      <ForwardButton onClick={handleNext} />
    </div>
  );
}
