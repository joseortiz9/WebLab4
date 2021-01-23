import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import CustomThemeProvider from "./contexts/CustomThemeProvider";

ReactDOM.render(
    <Provider store={store}>
        <CustomThemeProvider>
            <App />
        </CustomThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
