import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-red p-4 rounded-xl'> Tailwind test</h1>
   <Card username="NIkhil" btntext="Press Here"/>
   <Card username="Don" />
</>
  )
}

export default App
