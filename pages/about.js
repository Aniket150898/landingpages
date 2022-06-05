import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/about.module.css";

const about = () => {
  return (
    <>
    <Navbar/>
      <h1 className={styles.mainHeading}>Here is the About us</h1>
    </>
  )
}

export default about