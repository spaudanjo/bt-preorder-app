import React from "react";
import { GlobalContext } from "../GlobaContext";
import languageMap from "../LanguageMap";

const LanguageSwitcher = () => {
  const { setCurrentLanguage } = React.useContext(GlobalContext);
  return (
    <div>
      {Object.keys(languageMap).map((languageKey) => {
        const language = languageMap[languageKey];
        return (
          <button
            key={language.id}
            onClick={() => setCurrentLanguage(language)}
          >
            {language.name}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
