import { Provider } from 'react-redux'
import { store } from './components/FormConstructor/store'
import { FormConstructorPage } from './pages/FormConstructorPage'

function App() {
  return (
    // <Provider store={store}>
    <div>
      <FormConstructorPage />
    </div>
    // </Provider>
  )
}

export default App
