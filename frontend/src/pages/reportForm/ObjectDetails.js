import React, { useState } from "react";

import ForwardButton from "./ForwardButton";

import { useTranslation } from "react-i18next";
import CancelButton from "./CancelButton";
import { useNavigate } from "react-router-dom";

export default function ObjectDetails({ onNext }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    setFormData(() => ({
      details: "",
    }));
    navigate("/mainPage");
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
            {t("objetoDetalhes")}
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            {t("objetoTextoDetalhes")}
          </h3>

          <div className="flex flex-col space-y-4">
            <textarea
              type="text"
              name="details"
              rows="10"
              className="rounded-xl w-full max-h-36 min-h-36 py-2 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder={t("objetoDetalhes")}
              value={formData.details}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="w-[48%] flex flex-row items-center justify-center space-x-4">
        <CancelButton onClick={handleBack} />

        <ForwardButton onClick={handleNext} />
      </div>
    </div>
  );
}
