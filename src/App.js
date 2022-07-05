import './App.css'
import Products from './components/Products'
import {LoginForm} from './components/LoginForm'

function App() {
  return (
    <div id='app' className=''>
      <LoginForm />
      <Products />
    </div>
  )
}

export default App
