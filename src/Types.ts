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

export interface LocalizedProductDetails {
  productType: string;
  size: string;
  gender: string;
}
export interface Product {
  id: string;
  productType: string;
  localizedProductDetailsByLanguageId: {
    [key: string]: LocalizedProductDetails;
  };
  stock: number;
}

export type StockData = Array<Product>;

export type FormStructureAPIDataEntry = {
  id: string;
  type: "medical-help" | "language-chooser" | "info-message"
} | {
  id: string;
  type: "nfi-shop", 
  stockData: StockData
} 