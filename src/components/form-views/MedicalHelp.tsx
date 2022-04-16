import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";

const MedicalHelpForm = ({ onSubmitFormView, formViewId }: FormViewSubmitComponentProps) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="medicalForm.title" />
      </h1>
      <p>
        <I18n k="medicalForm.description" />
      </p>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <p>
        <button
          onClick={() =>
            onSubmitFormView({
                [`medicalForm_${formViewId}_.medicalHelpNeeded`]: true,
            })
          }
        >
          Yes
        </button>
        <button
          onClick={() =>
            onSubmitFormView({
              [`medicalForm_${formViewId}_.medicalHelpNeeded`]: false,
            })
          }
        >
          No
        </button>
      </p>
      <p>
        Language: {language.name}
      </p>
    </div>
  );
};

export default MedicalHelpForm;
