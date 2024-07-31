import { AppProviderProps, Language } from "./types";

import React, { useReducer, useEffect, useLayoutEffect } from "react";

import AppCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    onLoad(dispatch);
    const appCtx = localStorage.getItem("AppCtx");
    if (appCtx) {
      const { language } = JSON.parse(appCtx);
      dispatch({
        type: "loadLanguage",
        payload: language as Language,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("AppCtx", JSON.stringify(state));
  }, [state]);

  return (
    <AppCtx.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export { AppProvider, AppCtx };
