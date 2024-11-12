import React, { useState } from "react";
import ForwardButton from "./ForwardButton";

export default function ObjectForm({ onNext }) {
  const [formData, setFormData] = useState({
    category: "",
    object: "",
    color: "",
    brand: "",
  });


  const [errors, setErrors] = useState({
    category: "",
    object: "",
    color: "",
    brand: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  const handleNext = () => {

    let validationErrors = {};

    // Validate category
    if (!formData.category) {
      validationErrors.category = "Preencher Categoria";
    }

    // Validate object
    if (!formData.object) {
      validationErrors.object = "Preencher Objeto";
    }

    // Validate color
    if (!formData.color) {
      validationErrors.color = "Preencher Cor";
    }

    // Validate brand
    

    // If there are validation errors, set them and return early
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no validation errors, proceed to the next step
    onNext(formData);

  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%]">
            Como é o objeto?
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Quanto mais detalhes você der, mais fácil será de identificar o
            objeto e devolvê-lo para você.
          </h3>

          <div className="flex flex-col space-y-4">
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Categoria
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="object"
              value={formData.object}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Objeto
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            {errors.object && <p className="text-red-500 text-sm">{errors.object}</p>}
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="color"
              value={formData.color}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Cor
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}

            <input
              type="text"
              name="brand"
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder="Marca"
            />
            
          </div>
        </div>
      </div>
      <ForwardButton onClick={handleNext} />
    </div>
  );
}
