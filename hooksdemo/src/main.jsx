import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContext from './context-demo/AppContext.jsx'
import AppEffect from './effect-demo/AppEffect.jsx'
import AppEffectDep from './effect-demo/AppEffectDep.jsx'
import AppRef from './ref-demo/AppRef.jsx'
import AppPrev from './ref-demo/AppPrev.jsx'
import AppMemo from './effect-demo/memo-demo/AppMemo.jsx'
import RestData from './effect-demo/customhook-demo/RestData.jsx'
import CustomHook from './effect-demo/customhook-demo/CustomHook.jsx'
import CounterDemo from './effect-demo/customhook-demo/CounterDemo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook />
  </StrictMode>,
)
