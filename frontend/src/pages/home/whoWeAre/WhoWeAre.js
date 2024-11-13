import React from 'react'
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <div>{t("quemSomos")}</div>
  )
}
