import React from "react";
import formViewMapping from "../formViewMapping";
import { FlattenedFormViewResult } from "../Types";
import FinalSubmitView from "./form-views/FinalSubmitView";
import NavigationBar from "./NavigationBar";

const FormViewContainer = () => {
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

  const showFinalSubmitView =
    formViewIndex === mockedFormStructureFromAPI.length;

  return (
    <div>
      {FormViewComponent && (
        <FormViewComponent onSubmitFormView={onSubmitFormView} />
      )}
      {showFinalSubmitView && (
        <FinalSubmitView
          onSubmitFormView={() =>
            alert(
              `Final Submit: ${JSON.stringify(allFlattenedFormViewResults)}}`
            )
          }
        />
      )}

      {/* {mockedFormStructureFromAPI.map((foo) => {
        return formViewMapping["medica-help"];
      })} */}
      {/* <MedicalHelpForm /> */}

      <NavigationBar onClickBack={() => setFormViewIndex(prevFormViewIndex => prevFormViewIndex - 1)} canGoBack={formViewIndex > 0} />

      <p>{JSON.stringify(allFlattenedFormViewResults)}</p>
    </div>
  );
};

export default FormViewContainer;
