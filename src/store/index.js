import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const middleware = [thunk];
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = createStore(persistedReducer,
  {},
  compose(
    applyMiddleware(...middleware),
  ));
export const persistor = persistStore(store);
