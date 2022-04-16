import React, { useEffect, useMemo } from "react";
import MedicalHelpForm from "./components/form-views/MedicalHelp";
import { FlattenedFormViewResult, FormViewComponent, FormViewMappingEntry } from "./Types";
import GlobalContextProvider, {
  GlobalContext,
  LanguageMap,
} from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";

const mockedFormStructureFromAPI = [
  {
    id: "medical-help",
  },
];

function App() {
  
  const formViewMapping: { [key: string]: FormViewMappingEntry } = useMemo(() => ({
    "medical-help": {
      id: "medical-help",
      component: MedicalHelpForm,
    }
  }), []);

  const [formViewIndex, setFormViewIndex] = React.useState(0);
  // const [formViewId, setFormViewId] = React.useState("");
  // const [formViewComponent, setFormViewComponent] = React.useState<FormViewComponent>();
  const [allFlattenedFormViewResults, setAllFlattenedFormViewResults] =
    React.useState<FlattenedFormViewResult>({});

  // const formViewId = mockedFormStructureFromAPI?.[formViewIndex]?.id;
  // const formViewId = mockedFormStructureFromAPI?.[0]?.id;;

  const onSubmitFormView = (
    flattenedFormViewResult: FlattenedFormViewResult
  ) => {
    setAllFlattenedFormViewResults(
      (prevFlattenedFormViewResult: FlattenedFormViewResult) => ({
        ...prevFlattenedFormViewResult,
        ...flattenedFormViewResult,
      })
    );
    setFormViewIndex((prevFormViewIndex: number) => prevFormViewIndex + 1);
  };
  const formViewId = mockedFormStructureFromAPI?.[formViewIndex].id;
  console.log('formViewId', formViewId);
  console.log('formViewMapping', formViewMapping);
  const Component =
    !!formViewId && formViewMapping[formViewId]?.component;

  return (
    <GlobalContextProvider languageMap={languageMap}>
      <LanguageSwitcher />

      {Component && <Component onSubmitFormView={onSubmitFormView} />}

      {/* {mockedFormStructureFromAPI.map((foo) => {
        return formViewMapping["medica-help"];
      })} */}
      {/* <MedicalHelpForm /> */}

      <p>{JSON.stringify(allFlattenedFormViewResults)}</p>
    </GlobalContextProvider>
  );
}

export default App;
