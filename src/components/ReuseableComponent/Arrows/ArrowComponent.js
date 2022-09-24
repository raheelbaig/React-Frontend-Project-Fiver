import React from 'react'
import styles from "./arrow.module.css"

function ArrowComponent() {
  return (
    <div className={styles.main}>
        <button className={styles.arrow}>
            <img src='/arrowUp.svg' alt='icon'/>
        </button>
        <button className={styles.arrow}>
            <img src='/arrowDown.svg' alt='icon'/>
        </button>
    </div>
  )
}

export default ArrowComponent