export type FlattenedFormViewResult = {[key: string]: string | number | boolean};
export interface FormViewSubmitComponentProps {
  onSubmitFormView: (formViewData: FlattenedFormViewResult) => void;
  formViewId: string;
}
// export type GenericFormViewComponent = (props: FormViewSubmitComponentProps) => JSX.Element
// export type NFIViewComponent = (props: FormViewSubmitComponentProps & { stockData: string }) => JSX.Element

// export interface GenericFormViewMappingEntry {
//   id: "medical-help";
//   component: GenericFormViewComponent
// }

// export interface NFIShopViewMappingEntry extends GenericFormViewComponent {
//   id: "nfi-shop",
//   component: NFIViewComponent
// }

// export type FormViewMappingEntry = GenericFormViewMappingEntry | NFIShopViewMappingEntry

export interface LanguageDictionary {
  [key: string]: string;
}

export interface Language {
  name: string;
  id: string;
  dictionary: LanguageDictionary;
}


export type FormStructureAPIDataEntry = {
  id: string;
  type: "medical-help"
} | {
  id: string;
  type: "nfi-shop", 
  stockData: string
} | {
  id: string;
  type: "language-chooser"
}