import { IAppState, Language, Theme } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    isBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    isBusy: true,
  });

  changeIsModalOpen = (state: IAppState, payload: boolean) => ({
    ...state,
    isModalOpen: payload,
  });

  toggleIsModalOpen = (state: IAppState) => ({
    ...state,
    isModalOpen: !state.isModalOpen,
  });

  toggleLanguage = (state: IAppState) => ({
    ...state,
    language: state.language === "PL" ? ("EN" as Language) : ("PL" as Language),
  });

  toggleTheme = (state: IAppState) => ({
    ...state,
    theme: state.theme === "dark" ? ("light" as Theme) : ("dark" as Theme),
  });

  setLoad = (state: IAppState, payload: IAppState) => ({
    ...state,
    language: payload.language,
    theme: payload.theme,
  });
}

const actions = new AppActions();
export default actions;
