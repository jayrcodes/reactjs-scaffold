import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';
import { store, persistor } from './store';
import 'normalize.css/normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
