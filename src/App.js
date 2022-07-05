import './App.css'
import {useState} from 'react'
import Products from './components/Products'
import {LoginForm} from './components/LoginForm'

function App() {
  const [jwt, setJwt] = useState('');

  const handleSubmit = (data) => {
    setJwt(data);
  }

  return (
    <div id='app' className=''>
      <LoginForm onSubmit={handleSubmit} />
      <Products jwt={jwt}/>
    </div>
  )
}

export default App
