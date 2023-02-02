import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from 'theme';
import { persistedStore, store } from 'redux/store';
import './index.css';
import { injectStore } from 'services/tokenApi';

injectStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
  //</React.StrictMode>
);
