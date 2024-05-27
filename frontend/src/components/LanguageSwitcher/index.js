import br from './assets/br.svg'
import cn from './assets/cn.svg'
import en from './assets/en.svg'
import { useTranslation } from "react-i18next";
import i18n from 'i18next'

const languageOptions = [
    {
        value: "pt",
        flag: br
    },
    {
        value: "en",
        flag: en
    },
    {
        value: "cn",
        flag: cn
    }
]

export const LanguageSwitcher = () => {
    const { t } = useTranslation();
    return(
        <div className="languageSwitcher">
            {languageOptions.map(languageOptions => (
                <button
                key={languageOptions.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOptions.value)
                    } }
                
                >
                    <img src={languageOptions.flag} alt={languageOptions.value}/>
                    <span>{languageOptions.name}</span>
                </button>
            ))}
        </div>
    )
}

export default LanguageSwitcher;