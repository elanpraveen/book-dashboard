import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Content } from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  let user="praveen"
  return (
    <div className='App'>
      <Header user={user}/>
      <Content/>
      <Footer/>      
    </div>
  )
}

export default App
