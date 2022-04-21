import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";
import { Box, Button } from "@chakra-ui/react";

const FinalSubmitView = ({ onSubmitFormView }: {onSubmitFormView: () => void} ) => {
  return (
    <Box>
        <Button
          onClick={() =>
            onSubmitFormView()
          }
        >
          <I18n k="submitForm.confirm" /> 
        </Button>
    </Box>
  );
};

export default FinalSubmitView;
