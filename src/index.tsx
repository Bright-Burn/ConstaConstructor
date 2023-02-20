import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { setupStore } from './store';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </Provider>
);

