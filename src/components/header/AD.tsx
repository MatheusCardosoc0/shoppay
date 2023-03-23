import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

const AD = () => {
  return (
    <Link href={""}>
      <div className={styles.ad}>Ad</div>
    </Link>
  )
}

export default AD