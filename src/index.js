import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './content/DarkModeContext';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}  >
    <PersistGate loading={null} persistor={persistor}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
