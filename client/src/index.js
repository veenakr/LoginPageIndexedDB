import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.css';
import {store, persistor} from './store/configureStore';
import { Provider } from 'react-redux';
import { configureFakeBackend } from './helpers/_helpers';
import { PersistGate } from 'redux-persist/integration/react';

configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    
, document.getElementById('root'));
serviceWorker.register();
