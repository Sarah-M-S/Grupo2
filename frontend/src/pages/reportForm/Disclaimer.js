import React from "react";
import ForwardButton from "./ForwardButton";

export default function Disclaimer({onNext}) {

  const handleNext = () => {
    onNext();
  };
  
  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Se você não encontrou seu objeto nas pesquisas, não perca a
            esperança. Ele pode ainda não ter sido entregue no setor de Achados
            e Perdidos.
          </h2>
          <h2 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Você pode <b>reportar sua perda</b> e caso alguém entregue seu
            objeto, nós logo te avisaremos.
          </h2>
        </div>
      </div>

      <ForwardButton onClick={handleNext} />
    </div>
  );
}
