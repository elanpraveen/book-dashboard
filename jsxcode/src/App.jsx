import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  let islogin=false
  return (
    <>
      <h1 style={{backgroundColor:"red"}}>welcome praveen</h1>
      <h2 style={{color:"blue"}}>Now You Learn React</h2>
      <label htmlFor="">Enter</label><input type="text" />
      {
        islogin && <p>yes it is login</p>
      }
    </>
  )
}

export default App
