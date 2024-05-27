import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enFile from './translations/en.json'
import ptFile from './translations/pt.json'
import cnFile from './translations/cn.json'

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        pt: ptFile,
        en: enFile,
        cn: cnFile
    }
})

export default i18n;