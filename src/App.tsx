import React from "react";

const languages = [
  {
    name: "English",
    id: "en",
  },
  {
    name: "Deutsch",
    id: "de",
  },
];

const dictionaries = {
  en: {
    medicalFormTitle: "Medical Form",
  },
  de: {
    medicalFormTitle: "Medizinisches Formular",
  },
};

const Translate = ({ k: tKey }: { k: string }) => {
  // TODO: change this for global language context
  const language = "en";
  const dictionary = dictionaries[language];
  return <span>{tKey}</span>;
};

const formComponents = [
  {
    id: "medica-help",
  },
];


const MedicalHelpForm = () => {
  return (
    <div>
      <h1>
        <Translate k="medicalFormTitle" />
      </h1>
      <p>This is a form for medical help.</p>
    </div>
  );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = React.useContext(GlobalContext);
  return (
    <div>
      {languages.map((language) => (
        <button key={language.id} onClick={() => setLanguage(language.id)}>{language.name}</button>
      ))}
    </div>
  );
};


interface GlobalContext {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};
const GlobalContext = React.createContext<GlobalContext>({} as GlobalContext);

function GlobalContextProvider({children}: {children: React.ReactNode}) {
  const [language, setLanguage] = React.useState("en");

  // const globalContext = React.createContext({language, setLanguage});
  
  return (
    <GlobalContext.Provider value={{language, setLanguage}}>
      {children}
    </GlobalContext.Provider>
  );
};

function App() {
  return (
    <GlobalContextProvider>
      <LanguageSwitcher />
      <MedicalHelpForm />
    </GlobalContextProvider>
  );
}

export default App;
