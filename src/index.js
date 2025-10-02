import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";


import { Provider } from 'react-redux'
// import store from '../src/Components/PriceBlock/store/store'
import {store} from './Components/PriceBlock/store/store'

const theme = {
  colors: {
    darkgrey: "#7b7777d4",
    lightgrey: "#d7d2d2d6",
    darkpink: "#ef99bad2",
    lightpink: "#ef99bad2",
    navy: "#09639a"
  },
  padding: {
    sm: "4px",
    md: "8px",
    lg: "8px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "8px",
  },
};
const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

console.log(App);
