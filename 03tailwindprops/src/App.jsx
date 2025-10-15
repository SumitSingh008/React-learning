import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// props - props in react are short for 'properties' they are used to pass data from one component to another- usually from a parent component to a child component.
// props makes component reusable and dynamic. they are immutable , meaning their values can't be changed inside the child component.

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'John Doe',
    age : 21
  }

  return (
   <>
    <h1 className='bg-green-400 text mb-4'>Tailwind learning</h1>
    <Card username='marketing' someObj={myObj} btntext='Read more'/>
    <Card username='sales' someObj={myObj} />
   </>
  )
}

export default App
