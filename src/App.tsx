import React from "react";
import MedicalHelpForm from "./components/form-views/MedicalHelp";
import { FormViewMappingEntry, Language } from "./Types";
import GlobalContextProvider, { GlobalContext, LanguageMap } from "./GlobaContext";

// const languages: { [key: string]: Language } = {
const languageMap: LanguageMap = {
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

// ({ onSubmit }: {
//   onSubmit: () => string;
// }) => JSX.Element


const formViewMapping: {[key: string]: FormViewMappingEntry} = {
  "medical-help": {
    id: "medica-help",
    component: MedicalHelpForm,
  },
};

const mockedFormStructureFromAPI = [
  {
    id: "medica-help",
  },
];

function App() {

  const [formViewIndex, setFormViewIndex] = React.useState(0);

  // const foo = formViewIndex * 12;




  const Component = formViewMapping["medical-help"].component

  return (
    <GlobalContextProvider languageMap={languageMap}>
      <LanguageSwitcher />

        {<Component onSubmit={(formViewData) => alert(JSON.stringify(formViewData))} />}
        {/* {foo}
        <button onClick={() => setFormViewIndex(formViewIndex + 1)} >FOO</button> */}

      {/* {mockedFormStructureFromAPI.map((foo) => {
        return formViewMapping["medica-help"];
      })} */}
      {/* <MedicalHelpForm /> */}
    </GlobalContextProvider>
  );
}

export default App;
