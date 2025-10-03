import { type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const render = (App: ComponentType) => {
  const root = createRoot(document.getElementById('root')!)
  root.render( <App /> )

}

render(App)