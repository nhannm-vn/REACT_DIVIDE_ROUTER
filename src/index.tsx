import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Chúng ta muốn dùng react-router ở đâu thì phải bao ứng dụng của mình
//vào trong một loại router

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

/**
 * Ở đây thì mình dùng BrowserRouter tuy nhiên vẫn còn nhiều loại router khác
 * ví dụ như HashRouter, MemoryRouter. Ngoài ra còn có StaticRouter import hơi khó tí
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
