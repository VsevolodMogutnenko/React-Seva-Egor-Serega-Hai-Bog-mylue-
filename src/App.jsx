import { useState, useEffect } from 'react'
import { getImages } from './services/getImages'
import { SearchForm } from './components/SearchForm/SearchForm'

function App() {
  const [name, setName] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [response, setResponse] = useState([])
  const [isShowButton, setIsShowButton] = useState(false)

  useEffect(() => {
    if(name !== '') {
      getImages(name, pageNumber).then((data) => {setResponse((prev) => [...prev, ...data.hits])})
      if(response.length !== 0) {
        setIsShowButton(true)
      }
    }
  },[name, pageNumber])

  const handleSubmit = (value) => {
    setName(value)
    setIsShowButton(false)
    setResponse([])
  }

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1)
  }

  return (
    <>
    <SearchForm handleSubmit={handleSubmit} />
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
    {isShowButton&&<button type='button' onClick={handlePageNumber}>Load more</button>}
    </>
  )
}

export default App