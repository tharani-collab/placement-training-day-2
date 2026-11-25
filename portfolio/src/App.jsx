import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <h1>Vite + React</h1>
     <h1 style={{
      color:"red",
      fontSize:"35px",
      textAlign:"center"
     }}>Welcome to React</h1>
     <p className="text-gray-500 text-lg text-center">Learn React Step by step</p>
     <button className="bg-blue-500 text-white px-5 py-2 rounded-md m-1 cursor-pointer">Submit</button>
    </>
  )
}

export default App
