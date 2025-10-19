import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './listItem.module.css'

export const ListItem = ({webformatURL, likes, downloads, views, comments, tags, largeImageURL}) => {
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
          <p className={styles.p}>likes :{likes}</p>
          <p className={styles.p}>downloads :{downloads}</p>
          <p className={styles.p}>views :{views}</p>
          <p className={styles.p}>comments :{comments}</p>
          <p className={styles.p}>tags :{tags}</p>
        </li>
        {isShowModal && <Modal toggleModal={toggleModal}><img src={largeImageURL}/></Modal>}
      </>
}