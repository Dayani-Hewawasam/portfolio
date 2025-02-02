import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Intro from './Components/Intro/intro'
import Skills from './Components/Skills/skills'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Navbar/>
        <Intro/>
        <Skills/>
    </div>
  )
}

export default App
