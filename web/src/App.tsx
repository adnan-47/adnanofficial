import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='py-10 text-amber-900'>
        hello
      </div>
      <Navbar />
    </>
  )
}

export default App
