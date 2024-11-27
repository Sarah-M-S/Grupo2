import React, { useRef, useState } from "react";

import Disclaimer from "./Disclaimer";
import ObjectForm from "./ObjectForm";
import ObjectDetails from "./ObjectDetails";
import PlaceDate from "./PlaceDate";
import DataConfirm from "./DataConfirm";
import Success from "../success/Success";
import BackwardButton from "./RestartButton";
import FinalizeButton from "./FinalizeButton";
import { useTranslation } from "react-i18next";
import usePostReport from "../../hooks/usePostReport";

export default function ReportFormPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { isSubmitting, error, postFound } = usePostReport();
  const formDataRef = useRef(formData);

  const handleNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleRestart = () => {
    setFormData({});
    setStep(0);
  };

  const handleFinalize = async (user) => {
    if (user) {
      console.log("usuario: ", user, "formData: ", formData);
      await new Promise((resolve) => {
        setFormData((prevData) => {
          const updatedData = { ...prevData, user: user };
          formDataRef.current = updatedData;
          resolve();
          return updatedData;
        });
      });
      console.log(formDataRef.current);
      postFound(formDataRef.current);
      if (!error) {
        setStep((prevStep) => prevStep + 1);
      }
    } else {
      
      postFound(formData);
      if (!error) {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const { t } = useTranslation();
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
        return (
          <DataConfirm
            onRestart={handleRestart}
            onNext={handleFinalize}
            dataToConfirm={formData}
            isSubmitting={isSubmitting}
            error={error}
          />
        );
      case 5:
        return <Success message={t("mensagemSucesso")} route={"/mainPage"} />;
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
