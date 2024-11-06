import React, { useState } from "react";

import ForwardButton from "./ForwardButton";
import Disclaimer from "./Disclaimer";
import ObjectForm from "./ObjectForm";
import ObjectDetails from "./ObjectDetails";
import PlaceDate from "./PlaceDate";
import DataConfirm from "./DataConfirm";
import Success from "./Success";
import BackwardButton from "./RestartButton";
import FinalizeButton from "./FinalizeButton"

export default function ReportFormPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
    setStep((prevStep) => prevStep + 1);
    console.log(formData)

  };

  const handleRestart = () => {
    setFormData({})
    setStep(0);
  };

  const handleFinalize = () => {
    setStep((prevStep) => prevStep + 1);
    // ENVIAR OS DADOS DO FORMULÁRIO PARA O BACKEND ATRAVÉS DO FETCH
    console.log(formData)
  }
  
  console.log(step)

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Disclaimer onNext={handleNext} />;
      case 1:
        return <ObjectForm onNext={handleNext} />;
      case 2:
        return <ObjectDetails onNext={handleNext} />;
      case 3:
        return <PlaceDate onNext={handleNext} />;
      case 4:
        return <DataConfirm onRestart={handleRestart} onNext={handleFinalize} dataToConfirm={formData}/>;
      case 5:
        return <Success />;
      default:
        return <Disclaimer onNext={handleNext} />;
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center space-y-4">
        {renderStep()}
      </div>
    </div>
  );
}
