import {
    createI18nApi,
    declareComponentKeys
} from "i18nifty";
import { fallbackLanguage, languages } from "./types";
import { ComponentKey } from "./types";
export { declareComponentKeys };

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
    I18nFetchingSuspense,
    getTranslation,
    $readyLang
} = createI18nApi<ComponentKey>()(
    {
        languages,
        fallbackLanguage
    },
    {   // Modifier ou ajouter les resources ici : 
        "en": () => import("./resources/en").then(({ translations }) => translations),
        "fr": () => import("./resources/fr").then(({ translations }) => translations),
    }
);