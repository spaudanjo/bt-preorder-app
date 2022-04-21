import React, { useState } from "react";
import { FormViewSubmitComponentProps } from "../../Types";
import { Box, Button, Heading, Textarea } from "@chakra-ui/react";
import I18n from "../I18n";

interface TextInputFormViewProps extends FormViewSubmitComponentProps {
  title: string;
  description: string;
}

const TextInput = ({ onSubmitFormView, formViewId, title, description }: TextInputFormViewProps ) => {
  const [text, setText] = useState("");
  return (
    <Box>
      <Heading>{title}</Heading>
      <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={description} />
      <Button onClick={() => onSubmitFormView({
            [`textInputForm_${formViewId}_.text`]: text,
          })}><I18n k="general.continue" /></Button>
    </Box>
  );
};

export default TextInput;
