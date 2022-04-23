import GlobalContextProvider from "./GlobaContext";
import languageMap from "./LanguageMap";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FormViewContainer from "./components/FormViewContainer";
import { Center, Container, Stack } from "@chakra-ui/react";

function App() {
  return (
    <GlobalContextProvider languageMap={languageMap}>
      <Center>
        <Container>
          <Stack>
            <LanguageSwitcher />
            <FormViewContainer />
          </Stack>
        </Container>
      </Center>
    </GlobalContextProvider>
  );
}

export default App;
