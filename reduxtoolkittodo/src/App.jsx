import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <AddTodo />
    <Todo />
    </>
  )
}

export default App
