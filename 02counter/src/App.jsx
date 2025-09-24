import { useState } from 'react';
import './App.css'

function App() {
  const [counter, SetCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1; // wrong way to update state
    //SetCounter(counter + 1);
    //SetCounter(counter + 1);
    //SetCounter(counter + 1);
    //SetCounter(counter + 1);
    // this may not work as expected due to state batching
    // Correct way to update state based on previous state jaise ki counter pehle 15 tha to 16,17,18,19 hoga


    SetCounter(prevCounter => prevCounter + 1);
    SetCounter(prevCounter => prevCounter + 1);
    SetCounter(prevCounter => prevCounter + 1);
    SetCounter(prevCounter => prevCounter + 1);
    
    if(counter >= 20){
      SetCounter(20);
    }
  }

  const removeValue = () => {
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
