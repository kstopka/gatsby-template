import { Theme, Language } from "../contexted/App/types";

type TranslateTheme = {
  [key in Theme]: {
    [lang in Language]: string;
  };
};

export const translateTheme: TranslateTheme = {
  dark: {
    PL: "ciemny",
    EN: "dark",
  },
  light: {
    PL: "jasny",
    EN: "light",
  },
};
