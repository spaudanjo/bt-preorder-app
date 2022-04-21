import React from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { Box, Button, Heading, Textarea, Text } from "@chakra-ui/react";
import I18n from "../I18n";

interface TextInputFormViewProps extends FormViewSubmitComponentProps {
  title: string;
  description: string;
}

const TextInput = ({ onSubmitFormView, formViewId, title, description }: TextInputFormViewProps ) => {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Textarea placeholder={description} />
      <Button onClick={() => onSubmitFormView({})}><I18n k="general.continue" /></Button>
    </Box>
  );
};

export default TextInput;
