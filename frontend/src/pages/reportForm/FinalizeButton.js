import React from "react";
import { useTranslation } from "react-i18next";

export default function FinalizeButton({onClick}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full max-w-md space-y-12 bg-emerald-950 rounded-3xl py-2 px-8 md:w-[50%]">
      <button
        onClick={() => onClick()}
        className=" text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
      >
        {t("finalizar")}
      </button>
    </div>
  );
}
