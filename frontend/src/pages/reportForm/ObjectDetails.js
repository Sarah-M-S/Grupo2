import React, { useState } from "react";

import ForwardButton from "./ForwardButton";

export default function ObjectDetails({onNext}) {

  const [formData, setFormData] = useState({
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%]">
            Detalhes
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Tem algum detalhe a mais para ajudar a identificar o objeto perdido?
          </h3>

          <div className="flex flex-col space-y-4">
            <textarea
              type="text"
              name="details"
              rows="10"
              className="rounded-xl w-full max-h-36 min-h-36 py-2 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              required
              placeholder="Detalhes"
              value={formData.details}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <ForwardButton onClick={handleNext} />

    </div>
  );
}
