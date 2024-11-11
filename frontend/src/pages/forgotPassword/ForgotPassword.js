import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../success/Success";

export default function ForgotPassword() {
  const navigate = useNavigate();

  



  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleSave = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formData === '' || !emailRegex.test(formData.email)){
      alert('Preencher o campo email corretamente');
    } else {
      console.log(formData);
      setSent(true);
    }
    //console.log(formData);
    //setSent(true);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {sent && 
        <Success
          message={`Enviamos o link de recuperação para ${formData.email}`}
          route ={"/"}
        />
      }

      {!sent && 
        <div className="h-[90%] w-full flex flex-col items-center justify-center">
          <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
                Esqueci Minha Senha
              </h2>
              <h3 className="text-xl text-center font-semibold text-emerald-950 md:text-[100%]">
                Insira o email que você utiliza no seu cadastro, enviaremos um
                link para você alterar sua senha.
              </h3>
            </div>

            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                required
                placeholder="Email"
                

              />
            </div>

            <div className="flex flex-row justify-between">
              <button
                onClick={handleBack}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                Voltar
              </button>
              <button
                onClick={handleSave}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                Recuperar minha senha
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
