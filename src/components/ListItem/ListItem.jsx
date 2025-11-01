import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './listItem.module.css'

export const ListItem = ({webformatURL, likes, downloads, views, comments, largeImageURL}) => {
      const [isShowModal, setIsShowModal] = useState(false)
      // const handleShowModal = () => {
      //   setIsShowModal(true)
      // }

      // const handleCloseModal = () => {
      //   setIsShowModal(false)
      // }

      const toggleModal = () => {
        setIsShowModal(!isShowModal)
      }
      return <> <li className={styles.li} onClick={toggleModal}>
          <img src={webformatURL} className={styles.img}/>
          <div className={styles.text}>
            <p className={styles.p}>Likes: {likes}</p>
            <p className={styles.p}>Downloads: {downloads}</p>
            <p className={styles.p}>Views: {views}</p>
            <p className={styles.p}>Comments: {comments}</p>
          </div>
        </li>
        {isShowModal && <Modal toggleModal={toggleModal}><img src={largeImageURL}/></Modal>}
      </>
}