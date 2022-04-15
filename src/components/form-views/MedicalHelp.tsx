import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";

const MedicalHelpForm = ({onSubmit}: FormViewSubmitComponentProps) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="medicalForm.title" />
      </h1>
      <p>
        <I18n k="medicalForm.description" />
      </p>
      Language: {language.name}
      <button onClick={() => onSubmit({
        name: "John",
        age: 30
      })}>Submit</button>
    </div>
  );
};

export default MedicalHelpForm;