import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PDFProvider } from './customHooks/contentHooks.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PDFProvider>
    <App />
    </PDFProvider>
  </Provider>,
)

