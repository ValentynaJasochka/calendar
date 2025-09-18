import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme ={
  colors: {
    darkgrey:  "#7b7777d4",
    lightgrey:"#d7d2d2d6" ,
    darkpink: "#ef99bad2" ,
    lightpink: "#ef99bad2" ,
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

console.log(App);
