import { AppProviderProps, IAppState, Language } from "./types";

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
      const parsedAppCtx = JSON.parse(appCtx);
      dispatch({
        type: "setLoad",
        payload: parsedAppCtx as IAppState,
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
