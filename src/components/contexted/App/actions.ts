import { IAppState, Language } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    imBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    imBusy: true,
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

  loadLanguage = (state: IAppState, language: Language) => ({
    ...state,
    language,
  });
}

const actions = new AppActions();
export default actions;
