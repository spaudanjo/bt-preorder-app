export type FlattenedFormViewResult = {[key: string]: string | number | boolean};
export interface FormViewSubmitComponentProps {
  onSubmitFormView: (formViewData: FlattenedFormViewResult) => void;
}
export type FormViewComponent = (props: FormViewSubmitComponentProps) => JSX.Element

export interface FormViewMappingEntry {
  id: string;
  component: FormViewComponent
}

export interface LanguageDictionary {
  [key: string]: string;
}

export interface Language {
  name: string;
  id: string;
  dictionary: LanguageDictionary;
}