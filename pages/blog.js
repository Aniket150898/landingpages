import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/blog.module.css"

const blog = () => {
  return (
    <>
    <Navbar/>
      <h1 className={styles.mainHeading}> You can create number of blogs here</h1>
    </>
  );
};

export default blog
