import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

import { StateContextProvider } from './context/StateContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <React.StrictMode>
      <Router><App /></Router>
    </React.StrictMode>
  </StateContextProvider>
)
