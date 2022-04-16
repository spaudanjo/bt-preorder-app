import React from "react";
import { FormViewSubmitComponentProps, Language } from "../../Types";
import { GlobalContext, LanguageMap } from "../../GlobaContext";
import I18n from "../I18n";

const LanguageChooser = ({ onSubmitFormView, formViewId, availableLanguages }: FormViewSubmitComponentProps & { availableLanguages: LanguageMap}) => {
  const { currentLanguage, setCurrentLanguage } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="languageChooser.title" />
      </h1>
      <p>
        <I18n k="languageChooser.description" />
      </p>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <p>
        {Object.keys(availableLanguages).map(languageKey => {
          const language = availableLanguages[languageKey];
          return <div key={language.id}>
            test
          </div>
        })}
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
    </div>
  );
};

export default LanguageChooser;
