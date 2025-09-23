import { useState } from 'react';
import './App.css'

function App() {
  let [counter, SetCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);
    SetCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("clicked", counter);
    SetCounter(counter - 1);
    if(counter <= 0){
      SetCounter(0);
    }
  }


  return (
    <>
    <h1>React Learning</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
