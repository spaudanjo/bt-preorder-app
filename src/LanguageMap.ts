import { LanguageMap } from "./GlobaContext";

const languageMap: LanguageMap = {
    en: {
      name: "English",
      id: "en",
      dictionary: {
        "medicalForm.title": "Medical Help Form",
        "medicalForm.description": "Do you need medical help?",
        "nfiShop.title": "Clothes",
        "submitForm.confirm": "All Good? Submit?",
        "navigationBar.back": "Back"
      },
    },
    de: {
      name: "Deutsch",
      id: "de",
      dictionary: {
        "medicalForm.title": "Medizinische Hilfe Formular",
        "medicalForm.description": "Brauchen Sie medizinische Hilfe?",
        "nfiShop.title": "Kleidung",
        "submitForm.confirm": "Passt alles? Abschicken?",
        "navigationBar.back": "Züruck"
      },
    },
  };

export default languageMap