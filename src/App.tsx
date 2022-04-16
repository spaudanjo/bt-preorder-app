import React from "react";
import MedicalHelpForm from "./components/form-views/MedicalHelp";
import { FormViewMappingEntry } from "./Types";
import GlobalContextProvider, { GlobalContext, LanguageMap } from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";




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
