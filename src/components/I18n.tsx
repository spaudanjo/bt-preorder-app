import React from "react";
import { GlobalContext } from "../GlobaContext";

const I18n = ({ k: tKey }: { k: string }) => {
  const { currentLanguage } = React.useContext(GlobalContext);
  const dictionary = currentLanguage.dictionary;
  return <span>{dictionary[tKey] || tKey}</span>;
};

export default I18n