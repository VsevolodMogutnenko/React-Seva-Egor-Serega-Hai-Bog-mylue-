import { useState, useEffect } from 'react'
import { getImages } from '../../services/getImages'
import { SearchForm } from '../SearchForm/SearchForm'
import { ListItem } from '../ListItem/ListItem'
import styles from './app.module.css'

function App() {
  const [name, setName] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [response, setResponse] = useState([])
  const [isShowButton, setIsShowButton] = useState(false)

  useEffect(() => {
    if(name !== '') {
      getImages(name, pageNumber).then((data) => {
        if(data?.hits.length !== 0) {
          setIsShowButton(true)
        }
        setResponse((prev) => [...prev, ...data.hits])})
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
    <ul className={styles.ul}>
      {response?.map(({id, tags, webformatURL, likes, downloads, comments, views, largeImageURL}) => <ListItem key={id} webformatURL={webformatURL} likes={likes} downloads={downloads} views={views} comments={comments} tags={tags} largeImageURL={largeImageURL}/>)}
    </ul>
    {isShowButton&&<button type='button' onClick={handlePageNumber}>Load more</button>}
    </>
  )
}

export default App