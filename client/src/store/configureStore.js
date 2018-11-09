import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/_reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = createStore(persistedReducer,applyMiddleware(thunkMiddleware) );

  export const persistor = persistStore(store);
   
//   export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

  
// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware
//     )
// );