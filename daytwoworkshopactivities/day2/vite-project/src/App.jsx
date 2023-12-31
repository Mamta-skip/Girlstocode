import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counterclick from './component/Counterclick'
import Todos from './component/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Todos></Todos>
    </>
  )
}

export default App
