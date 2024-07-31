import { ReactNode, Dispatch } from "react";

type Language = "PL" | "EN";
type Theme = "dark" | "light";

interface IAppState {
  isBusy: boolean;
  isModalOpen: boolean;
  language: Language;
  theme: Theme;
}

type AppActionType =
  | { type: "loaded" }
  | { type: "loading" }
  | { type: "toggleIsModalOpen" }
  | {
      type: "changeIsModalOpen";
      payload: boolean;
    }
  | { type: "toggleLanguage" }
  | { type: "toggleTheme" }
  | {
      type: "setLoad";
      payload: IAppState;
    };

interface IAppActions {
  loaded: () => void;
  loading: () => void;
  toggleIsModalOpen: () => void;
  changeIsModalOpen: (value: boolean) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setLoad: (value: IAppState) => void;
}

interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}

export {
  IAppState,
  IAppActions,
  AppActionType,
  AppProviderProps,
  IAppContext,
  Language,
  Theme,
};
