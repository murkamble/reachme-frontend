import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/global.css'
import App from './App';
import DataProvider from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('application')
)