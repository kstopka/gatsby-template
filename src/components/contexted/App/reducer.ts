import { AppActionType, IAppState } from "./types";

import actions from "./actions";
import initialState from "./state";

function appReducer(state = initialState, action: AppActionType): IAppState {
  switch (action.type) {
    case "loaded":
      return actions.loaded(state);
    case "loading":
      return actions.loading(state);
    case "changeIsModalOpen":
      return actions.changeIsModalOpen(state, action.payload);
    case "toggleIsModalOpen":
      return actions.toggleIsModalOpen(state);
    case "toggleLanguage":
      return actions.toggleLanguage(state);
    case "toggleTheme":
      return actions.toggleTheme(state);
    case "setLoad":
      return actions.setLoad(state, action.payload);

    default:
      throw new Error("Wrong action type in app reducer");
  }
}

export default appReducer;
