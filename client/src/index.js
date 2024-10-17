import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you are importing from react-dom/client
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { reducers } from './reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers, applyMiddleware(thunk));

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application using the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Optional: Measure performance in your app
reportWebVitals();
