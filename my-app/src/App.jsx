import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Intro from './Components/Intro/intro'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Navbar/>
        <Intro/>
    </div>
  )
}

export default App
