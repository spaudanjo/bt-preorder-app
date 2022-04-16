import MedicalHelpForm from "./components/form-views/MedicalHelp";
import { FormViewMappingEntry } from "./Types";

const formViewMapping: { [key: string]: FormViewMappingEntry } = {
  "medical-help": {
    id: "medical-help",
    component: MedicalHelpForm,
  },
};

export default formViewMapping;
