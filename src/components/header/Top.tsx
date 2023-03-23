import React from 'react'
import styles from './styles.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountCircleFill, RiArrowDropDownFill } from 'react-icons/ri'

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <span>Moroco / usd</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>help</span>
          </li>
          <li>
            <BsSuitHeart />
            <span>WishList</span>
          </li>
          <li>
            <div className={styles.flex}>
            <RiAccountCircleFill />
            <span>Account</span>
            <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Top