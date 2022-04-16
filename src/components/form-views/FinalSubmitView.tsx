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
          All Good? Submit?
        </button>
    </div>
  );
};

export default FinalSubmitView;
