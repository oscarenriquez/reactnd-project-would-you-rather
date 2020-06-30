import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import configureStore from "./store/configureStore";
import {BrowserRouter} from "react-router-dom"

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Heebo',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            light: "#5873a3",
            main:"#212B3D"
        }
    },
});

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
