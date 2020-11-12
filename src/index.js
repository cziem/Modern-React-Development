import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { configureStore } from "./store/store";
import App from "./App";
import "./App.css";

const store = configureStore();
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
