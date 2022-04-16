import React, { useEffect, useMemo } from "react";
import MedicalHelpForm from "./components/form-views/MedicalHelp";
import {
  FlattenedFormViewResult,
  FormViewComponent,
  FormViewMappingEntry,
} from "./Types";
import GlobalContextProvider, {
  GlobalContext,
  LanguageMap,
} from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";
import formViewMapping from "./formViewMapping";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import FinalSubmitView from "./components/form-views/FinalSubmitView";
import NavigationBar from "./components/NavigationBar";

function App() {
  // const formViewMapping: { [key: string]: FormViewMappingEntry } = useMemo(() => (formViewMapping), []);

  const [formViewIndex, setFormViewIndex] = React.useState(0);
  // const [formViewId, setFormViewId] = React.useState("");
  // const [formViewComponent, setFormViewComponent] = React.useState<FormViewComponent>();
  const [allFlattenedFormViewResults, setAllFlattenedFormViewResults] =
    React.useState<FlattenedFormViewResult>({});

  // const formViewId = mockedFormStructureFromAPI?.[formViewIndex]?.id;
  // const formViewId = mockedFormStructureFromAPI?.[0]?.id;;

  const mockedFormStructureFromAPI = [
    {
      id: "medical-help",
    },
  ];

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
  

  const formViewId = mockedFormStructureFromAPI?.[formViewIndex]?.id;
  const formViewMappingEntry = formViewMapping?.[formViewId];
  const FormViewComponent = formViewMappingEntry?.component;


  const showFinalSubmitView = formViewIndex === mockedFormStructureFromAPI.length;


  return (
    <GlobalContextProvider languageMap={languageMap}>
      <LanguageSwitcher />

      {FormViewComponent && <FormViewComponent onSubmitFormView={onSubmitFormView} />}
      {showFinalSubmitView && <FinalSubmitView onSubmitFormView={() => alert(`Final Submit: ${JSON.stringify(allFlattenedFormViewResults)}}`)}/> }

      {/* {mockedFormStructureFromAPI.map((foo) => {
        return formViewMapping["medica-help"];
      })} */}
      {/* <MedicalHelpForm /> */}
    
      <NavigationBar />

      <p>{JSON.stringify(allFlattenedFormViewResults)}</p>
    </GlobalContextProvider>
  );
}

export default App;
