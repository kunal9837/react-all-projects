import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  function addme(){
    if(count === 20){
      setCount(20)
      alert("LOL you can not increase value")
    }else{
      setCount(count + 1)
    }
    
  }

  function downme(){
    if(count === 0){
      setCount(0)
      alert("value can't be negative")
    }
    else{
      setCount(count - 1)
    }
    
  }
  return (
    <>
     <h1>This is the counter app</h1>
     <h2>Countdown start at {count}</h2>
     <button onClick={addme}>Increase</button>
     <br/>
     <button onClick={downme}>Decrease</button>
    </>
  )
}

export default App
