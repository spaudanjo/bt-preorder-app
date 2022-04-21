import { Box, Center } from "@chakra-ui/react";
import React from "react";
import languageMap from "../LanguageMap";
import mockedFormStructureFromAPI from "../MockedFormStructureAPIResult";
// import formViewMapping from "../formViewMapping";
import {
  FlattenedFormViewResult,
  FormStructureAPIDataEntry,
  FormViewSubmitComponentProps,
} from "../Types";
import FinalSubmitView from "./form-views/FinalSubmitView";
import InfoMessage from "./form-views/InfoMessage";
import LanguageChooser from "./form-views/LanguageChooser";
import MedicalHelpForm from "./form-views/MedicalHelp";
import NFIShop from "./form-views/NFIShop/NFIShop";
import NavigationBar from "./NavigationBar";

const FormViewComponent = ({
  formViewData,
  ...props
}: {
  formViewData: FormStructureAPIDataEntry;
} & FormViewSubmitComponentProps) => {
  switch (formViewData.type) {
    case "language-chooser": {
      return <LanguageChooser {...props} availableLanguages={languageMap} />;
    }
    case "medical-help": {
      return <MedicalHelpForm {...props} />;
    }
    case "info-message": {
      return <InfoMessage {...props} />;
    }
    case "nfi-shop": {
      return <NFIShop {...props} stockData={formViewData.stockData} />;
    }
  }
};

const FormViewContainer = () => {
  const [formViewIndex, setFormViewIndex] = React.useState(0);
  const [allFlattenedFormViewResults, setAllFlattenedFormViewResults] =
    React.useState<FlattenedFormViewResult>({});

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

  const showFinalSubmitView =
    formViewIndex === mockedFormStructureFromAPI.length;

  return (
    <Center>
      {!showFinalSubmitView && (
        <FormViewComponent
          onSubmitFormView={onSubmitFormView}
          formViewData={formViewData}
          formViewId={formViewData.id}
        />
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

      <NavigationBar
        onClickBack={() =>
          setFormViewIndex((prevFormViewIndex) => prevFormViewIndex - 1)
        }
        canGoBack={formViewIndex > 0}
      />
    </Center>
  );
};

export default FormViewContainer;
