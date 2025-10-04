import { useState, useEffect } from 'react'
import { getImages } from './services/getImages'

function App() {
  const [name, setName] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {console.log('works')},[name, pageNumber])

  const handleInputName = (event) => {
    const {value} = event.target
    setName(value)
  }

  return (
    <>
    <form>
      <input type='text' placeholder='Search image' value={name} onChange={handleInputName}/>
      <button type='submit'>Search</button>
    </form>
    </>
  )
}

export default App