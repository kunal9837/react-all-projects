import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>hello world</h1>
      <Card  username = "kunal" btn = "Click Me"/>
      <Card  username = "Akash" btn = "Show Me" />
    </>
  )
}

export default App
