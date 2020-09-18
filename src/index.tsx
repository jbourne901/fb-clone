import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reducer from "./state/reducer";
import {initialState} from "./state/types";
import {StateProvider} from "./components/state-provider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
  document.getElementById('root')
);

