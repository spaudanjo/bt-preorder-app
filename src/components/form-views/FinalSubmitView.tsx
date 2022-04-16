import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";

const FinalSubmitView = ({ onSubmitFormView }: {onSubmitFormView: () => void} ) => {
  return (
    <div>
        <button
          onClick={() =>
            onSubmitFormView()
          }
        >
          <I18n k="submitForm.confirm" /> 
        </button>
    </div>
  );
};

export default FinalSubmitView;
