import { ReactNode, Dispatch } from "react";

type Language = "PL" | "EN";

interface IAppState {
  imBusy: boolean;
  isModalOpen: boolean;
  language: Language;
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
  | {
      type: "loadLanguage";
      payload: Language;
    };

interface IAppActions {
  loaded: () => void;
  loading: () => void;
  toggleIsModalOpen: () => void;
  changeIsModalOpen: (value: boolean) => void;
  toggleLanguage: () => void;
  loadLanguage: (value: Language) => void;
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
};
