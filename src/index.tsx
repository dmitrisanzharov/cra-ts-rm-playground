import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


// redux
import { Provider } from 'react-redux';
import basicStoreConfig from 'src/redux/basicStoreConfig';


// persistor
const myPersistor = persistStore(basicStoreConfig);



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={basicStoreConfig}>
        <PersistGate persistor={myPersistor}>
        <App />
        </PersistGate>
        
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
