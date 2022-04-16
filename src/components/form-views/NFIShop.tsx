import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";

const NFIShop = ({ onSubmitFormView, formViewId, stockData }: FormViewSubmitComponentProps & { stockData: string }) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <div>
      <h1>
        <I18n k="nfiShop.title" />
      </h1>
      <p>{stockData}</p>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <p></p>
      <p>Language: {language.name}</p>
      <button
        onClick={() =>
          onSubmitFormView({
            [`nfiShopForm_${formViewId}_.shoppingData`]: "SOME SHOPPING DATA",
          })
        }
      >
        Done with Shopping
      </button>
    </div>
  );
};

export default NFIShop;
