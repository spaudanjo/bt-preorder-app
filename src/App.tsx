import React, { useEffect } from "react";
import MedicalHelpForm from "./components/form-views/MedicalHelp";
import { FlattenedFormViewResult, FormViewMappingEntry } from "./Types";
import GlobalContextProvider, {
  GlobalContext,
  LanguageMap,
} from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";

const formViewMapping: { [key: string]: FormViewMappingEntry } = {
  "medical-help": {
    id: "medical-help",
    component: MedicalHelpForm,
  },
};

const mockedFormStructureFromAPI = [
  {
    id: "medical-help",
  },
];

function App() {
  const [formViewIndex, setFormViewIndex] = React.useState(0);
  const [allFlattenedFormViewResults, setAllFlattenedFormViewResults] =
    React.useState<FlattenedFormViewResult>({});

  const formViewId = mockedFormStructureFromAPI[formViewIndex].id;

  const Component = formViewMapping[formViewId].component;

  const onSubmitFormView = (
    flattenedFormViewResult: FlattenedFormViewResult
  ) => {
    setAllFlattenedFormViewResults(
      (prevFlattenedFormViewResult: FlattenedFormViewResult) => ({
        ...prevFlattenedFormViewResult,
        ...flattenedFormViewResult,
      })
    );
  };

  useEffect(() => {
    alert(JSON.stringify(allFlattenedFormViewResults));
  }, 
  [allFlattenedFormViewResults])
  

  return (
    <GlobalContextProvider languageMap={languageMap}>
      <LanguageSwitcher />

      {<Component onSubmitFormView={onSubmitFormView} />}
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
