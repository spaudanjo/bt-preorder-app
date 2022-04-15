import React from "react";

const languages: { [key: string]: Language } = {
  en: {
    name: "English",
    id: "en",
    dictionary: {
      medicalFormTitle: "Medical Help Form",
    },
  },
  de: {
    name: "Deutsch",
    id: "de",
    dictionary: {
      medicalFormTitle: "Medizinische Hilfe Formular",
    },
  },
};

interface LanguageDictionary {
  [key: string]: string;
}

interface Language {
  name: string;
  id: string;
  dictionary: LanguageDictionary;
}

const Translate = ({ k: tKey }: { k: string }) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  const dictionary = language.dictionary;
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
        <Translate k="medicalFormTitle" />
      </h1>
      <p>This is a form for medical help.</p>
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
