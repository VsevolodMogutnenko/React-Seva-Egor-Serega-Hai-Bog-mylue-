import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './listItem.module.css'
import { BiSolidLike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

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
            <p className={styles.p}> <span className={styles.likeIcon}> <BiSolidLike size={30} /> </span> {likes}</p>
            <p className={styles.p}> <span className={styles.likeIcon}> <IoMdDownload size={30} /> </span> {downloads}</p>
            <p className={styles.p}> <span className={styles.likeIcon}> <FaEye size={30} /> </span> {views}</p>
            <p className={styles.p}> <span className={styles.likeIcon}> <FaCommentDots size={30} /> </span> {comments}</p>
          </div>
        </li>
        {isShowModal && <Modal toggleModal={toggleModal}><img src={largeImageURL}/></Modal>}
      </>
}