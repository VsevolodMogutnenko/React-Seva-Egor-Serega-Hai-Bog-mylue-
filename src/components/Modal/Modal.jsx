import styles from './modal.module.css'

export const Modal = ({children, toggleModal}) => {
    return <div className={styles.backDrop}>
        <div className={styles.modal}>
            {children}
            <button type="button" onClick={toggleModal}>X</button>
        </div>
    </div>
}