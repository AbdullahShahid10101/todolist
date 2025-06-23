// src/state/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage
import { applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from './reducers/taskReducer';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, taskReducer);

// Enable Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
