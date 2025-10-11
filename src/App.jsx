import { useState, useEffect } from 'react'
import { getImages } from './services/getImages'

function App() {
  const [name, setName] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [response, setResponse] = useState([])
  useEffect(() => {
    if(name !== '') {
      getImages(name, pageNumber).then((data) => {setResponse((prev) => [...prev, ...data.hits])})
    }
  },[name, pageNumber])

  const handleInputName = (event) => {
    const {value} = event.target
    setName(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Search image' value={name} onChange={handleInputName}/>
      <button type='submit'>Search</button>
    </form>
    <ul>
      {response?.map(({id, tags, webformatURL, likes, downloads, comments, views}) => <li key={id}>
        <img src={webformatURL} />
        <p>likes :{likes}</p>
        <p>downloads :{downloads}</p>
        <p>views :{views}</p>
        <p>comments :{comments}</p>
        <p>tags :{tags}</p>
      </li>)}
    </ul>
    <button type='button' onClick={handlePageNumber}>Load more</button>
    </>
  )
}

export default App