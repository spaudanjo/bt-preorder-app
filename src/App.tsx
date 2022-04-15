import React from "react";

// const languages: { [key: string]: Language } = {
const languages: { [key: string]: Language } = {
  en: {
    name: "English",
    id: "en",
    dictionary: {
      "medicalForm.title": "Medical Help Form",
      "medicalForm.description": "This is a form for medical help.",
    },
  },
  de: {
    name: "Deutsch",
    id: "de",
    dictionary: {
      "medicalForm.title": "Medizinische Hilfe Formular",
      "medicalForm.description": "Das ist ein medizinisches Hilfe-Formular.",
    },
  },
};

// This is a form for medical help.

interface LanguageDictionary {
  [key: string]: string;
}

interface Language {
  name: string;
  id: string;
  dictionary: LanguageDictionary;
}

const I18n = ({ k: tKey }: { k: string }) => {
  const { currentLanguage } = React.useContext(GlobalContext);
  const dictionary = currentLanguage.dictionary;
  return <span>{dictionary[tKey] || tKey}</span>;
};

const formComponents = [
  {
    id: "medica-help",
  },
];

const MedicalHelpForm = () => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="medicalForm.title" />
      </h1>
      <p><I18n k="medicalForm.description" /></p>
      Language: {language.name}
    </div>
  );
};

const LanguageSwitcher = () => {
  const { setCurrentLanguage } = React.useContext(GlobalContext);
  return (
    <div>
      {Object.keys(languages).map((languageKey) => {
        const language = languages[languageKey];
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

interface IGlobalContext {
  currentLanguage: Language;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Language>>;
}
const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = React.useState(languages["en"]);

  return (
    <GlobalContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

function App() {
  return (
    <GlobalContextProvider>
      <LanguageSwitcher />
      <MedicalHelpForm />
    </GlobalContextProvider>
  );
}

export default App;
