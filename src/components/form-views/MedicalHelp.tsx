import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { GlobalContext } from "../../GlobaContext";
import I18n from "../I18n";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const MedicalHelpForm = ({ onSubmitFormView, formViewId }: FormViewSubmitComponentProps) => {
  const { currentLanguage: language } = React.useContext(GlobalContext);
  return (
    <Box>
      <Heading>
        <I18n k="medicalForm.title" />
      </Heading>
      <Text>
        <I18n k="medicalForm.description" />
      </Text>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
        <Button
          onClick={() =>
            onSubmitFormView({
                [`medicalForm_${formViewId}_.medicalHelpNeeded`]: true,
            })
          }
        >
          Yes
        </Button>
        <Button
          onClick={() =>
            onSubmitFormView({
              [`medicalForm_${formViewId}_.medicalHelpNeeded`]: false,
            })
          }
        >
          No
        </Button>
    </Box>
  );
};

export default MedicalHelpForm;
