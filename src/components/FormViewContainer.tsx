import React from "react";
// import formViewMapping from "../formViewMapping";
import {
  FlattenedFormViewResult,
  FormStructureAPIDataEntry,
  FormViewSubmitComponentProps,
} from "../Types";
import FinalSubmitView from "./form-views/FinalSubmitView";
import MedicalHelpForm from "./form-views/MedicalHelp";
import NFIShop from "./form-views/NFIShop";
import NavigationBar from "./NavigationBar";

const FormViewComponent = ({
  formViewData,
  ...props
}: {
  formViewData: FormStructureAPIDataEntry;
} & FormViewSubmitComponentProps) => {
  switch (formViewData.type) {
    case "medical-help": {
      return <MedicalHelpForm {...props} />;
    }
    case "nfi-shop": {
      return <NFIShop {...props} stockData={formViewData.stockData} />;
    }
  }
};

const FormViewContainer = () => {
  const [formViewIndex, setFormViewIndex] = React.useState(0);
  // const [formViewId, setFormViewId] = React.useState("");
  // const [formViewComponent, setFormViewComponent] = React.useState<FormViewComponent>();
  const [allFlattenedFormViewResults, setAllFlattenedFormViewResults] =
    React.useState<FlattenedFormViewResult>({});

  // const formViewId = mockedFormStructureFromAPI?.[formViewIndex]?.id;
  // const formViewId = mockedFormStructureFromAPI?.[0]?.id;;

  const mockedFormStructureFromAPI: Array<FormStructureAPIDataEntry> = [
    {
      id: "medicHelp1",
      type: "medical-help",
    },
    {
      id: "nfiShop1",
      type: "nfi-shop",
      stockData: "STOCK DATA",
    },
    {
      id: "nfiShop2",
      type: "nfi-shop",
      stockData: "STOCK DATA 2",
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

  const formViewData = mockedFormStructureFromAPI?.[formViewIndex];
  //   const Component = FormViewComponent(formViewData);

  const showFinalSubmitView =
    formViewIndex === mockedFormStructureFromAPI.length;

  // if(formViewMappingEntry.id === "nfi-shop") {
  //     formViewMappingEntry.component
  // }

  return (
    <div>
      {!showFinalSubmitView && (
        <FormViewComponent
          onSubmitFormView={onSubmitFormView}
          formViewData={formViewData}
          formViewId={formViewData.id}
        />
      )}

      {/* {FormViewComponent && (
        formViewMappingEntry.id !== "nfi-shop" && <FormViewComponent onSubmitFormView={onSubmitFormView} />
      )} */}
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

      <NavigationBar
        onClickBack={() =>
          setFormViewIndex((prevFormViewIndex) => prevFormViewIndex - 1)
        }
        canGoBack={formViewIndex > 0}
      />

      <p>{JSON.stringify(allFlattenedFormViewResults)}</p>
    </div>
  );
};

export default FormViewContainer;
