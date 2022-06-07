import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import {persistor, store} from './redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    // </React.StrictMode>
);
