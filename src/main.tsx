import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import store from './store/main.ts'
import { Provider } from 'react-redux'
import './assets/main.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
