import { useEffect } from 'react'
import styles from './modal.module.css'

export const Modal = ({children, toggleModal}) => {
    const closeByClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleModal()
        }
    }

    useEffect(() => {
        const closeByKey = (event) => {
            console.log(event.code)
            if (event.code === 'Escape') {
                toggleModal()
            }
        }
        window.addEventListener('keydown', closeByKey)
        return () => {
            window.removeEventListener('keydown', closeByKey)
        }
    },[])

    return <div className={styles.backDrop} onClick={closeByClick}>
        <div className={styles.modal}>
            {children}
            <button type="button" onClick={toggleModal} className={styles.button}>X</button>
        </div>
    </div>
}