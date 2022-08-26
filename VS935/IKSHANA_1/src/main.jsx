import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 import { UserAuthContextProvider } from "./context/UserAuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<UserAuthContextProvider> <App /></UserAuthContextProvider>
    
  </React.StrictMode>
)
