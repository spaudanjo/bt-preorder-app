import GlobalContextProvider from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FormViewContainer from "./components/FormViewContainer";

function App() {

  return (
    <GlobalContextProvider languageMap={languageMap}>
      <LanguageSwitcher />
      <FormViewContainer />
    </GlobalContextProvider>
  );
}

export default App;
