import { useState } from "react"
import styles from './searchForm.module.css'

export const SearchForm = ({handleSubmit}) => {
    const [name, setName] = useState('')
    const handleInputName = (event) => {
        const {value} = event.target
        setName(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleSubmit(name)
    }

    return <form onSubmit={handleFormSubmit} className={styles.form}>
      <input type='text' placeholder='Search image' value={name} onChange={handleInputName} className={styles.input}/>
      <button type='submit' className={styles.submit}>Search</button>
    </form>
}