import React from "react";
import { Language } from "./Types";

export interface LanguageMap {
  en: Language;
  [key: string]: Language;
}

interface IGlobalContext {
  currentLanguage: Language;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Language>>;
}
export const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext);

const GlobalContextProvider = ({
  children,
  languageMap,
}: {
  children: React.ReactNode;
  languageMap: LanguageMap;
}) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(languageMap.en);

  return (
    <GlobalContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
