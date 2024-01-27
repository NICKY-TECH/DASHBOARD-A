import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import overLay from "./feature/overLay.js";
import tradeLay from "./feature/trade.js";
import infoLay from "./feature/info.js";
import darkMode from "./feature/darkmode.js";
import infoLayData from "./feature/infoData.js";
import { configureStore } from "@reduxjs/toolkit";
import aside  from "./feature/aside.js";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    overLay,
    tradeLay,
    darkMode,
    infoLay,
    infoLayData,
    aside,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
