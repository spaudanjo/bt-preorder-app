import React from "react";
import { FormViewSubmitComponentProps, Language } from "../../Types";
import { GlobalContext, LanguageMap } from "../../GlobaContext";
import I18n from "../I18n";
import { Button } from "@chakra-ui/react";

const InfoMessage = ({ onSubmitFormView, formViewId }: FormViewSubmitComponentProps) => {
  const { currentLanguage, setCurrentLanguage } = React.useContext(GlobalContext);

  const onChooseLanguage = (language: Language) => {
    setCurrentLanguage(language);
    onSubmitFormView({
      [`languageChooserForm_${formViewId}_.language`]: language.id,
    });
  }

  return (
    <div>
      <h1>
        <I18n k="InfoMessage.title" />
      </h1>
      <p>
        <I18n k="InfoMessage.description" />
      </p>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <Button
        onClick={() =>
          onSubmitFormView({})
        }
      >
        Ok
      </Button>
    </div>
  );
};

export default InfoMessage;
