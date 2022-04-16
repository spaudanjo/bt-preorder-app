import MedicalHelpForm from "./components/form-views/MedicalHelp";
import NFIShop from "./components/form-views/NFIShop";
import { GenericFormViewMappingEntry, NFIShopViewMappingEntry } from "./Types";

const formViewMapping: { [key: string]: (GenericFormViewMappingEntry | NFIShopViewMappingEntry) } = {
  "medical-help": {
    id: "medical-help",
    component: MedicalHelpForm,
  } as GenericFormViewMappingEntry,
  "nfi-shop": {
    id: "nfi-shop",
    component: NFIShop,
  } as NFIShopViewMappingEntry,
};

export default formViewMapping;
