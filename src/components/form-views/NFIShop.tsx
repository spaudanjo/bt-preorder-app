import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";

const NFIShop = ({ onSubmitFormView, stockData }: FormViewSubmitComponentProps & { stockData: string }) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="nfiShop.title" />
      </h1>
      <p>
        {stockData}
      </p>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <p>
      </p>
      <p>
        Language: {language.name}
      </p>
    </div>
  );
};

export default NFIShop;
