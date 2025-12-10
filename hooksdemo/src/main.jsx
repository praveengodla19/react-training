import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContext from './context-demo/AppContext.jsx'
import AppEffect from './effect-demo/AppEffect.jsx'
import AppEffectDep from './effect-demo/AppEffectDep.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEffectDep />
  </StrictMode>,
)
