import MedicalHelpForm from "./components/form-views/MedicalHelp";
import NFIShop from "./components/form-views/NFIShop";
import { FormViewMappingEntry } from "./Types";

const formViewMapping: { [key: string]: FormViewMappingEntry } = {
  "medical-help": {
    id: "medical-help",
    component: MedicalHelpForm,
  },
  "nfi-shop": {
    id: "nfi-shop",
    component: NFIShop,
  },
};

export default formViewMapping;
