import { useState, useEffect } from 'react'
import { List } from './components/List/List'
import { Count } from './components/Count/Count'
import { Form } from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  // useEffect(() => {console.log('works')},[count,value])

  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setValue(value-1)
  }
  const handleStart = () => {
    setCount(0)
  }
  return (
    <>
      {/* <button type='button' onClick={handleIncrement}>Increment</button>
      <Count value={count} name=' mogutnevichey' />
      <button type='button' onClick={handleDecrement}>Decrement</button>
      <button type='button' onClick={handleStart}>Start</button>
      <div>{value}</div>
      
      <List navigation='Navigatsia'/> */}
      <Form />
    </>
  )
}

export default App
