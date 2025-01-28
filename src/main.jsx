import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/ReactToastify.css'
import { Provider } from 'react-redux'
// import { Usercontextprovider } from './Context/MyContext.jsx'
import {store} from '../src/Context/Store.jsx'

createRoot(document.getElementById('root')).render(
  // <Usercontextprovider>
  // <StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
    // </StrictMode>
)
