import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/index.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const store = configureStore({
  reducer:rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
