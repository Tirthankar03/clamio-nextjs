"use client";

import { persistor, store } from "@/Store/store";
import React from "react";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from 'redux-persist'

function ReduxProvider({ children }: any) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      
       {children}
    </PersistGate>
   
    </Provider>;
}

export default ReduxProvider;
