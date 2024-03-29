import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/NannyServices">
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
          <Toaster position="top-right" reverseOrder={true} />
        </PersistGate>
      </Provider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
