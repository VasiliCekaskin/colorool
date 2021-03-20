import Link from "next/link";
import styles from "../../styles/Hero.module.css";
import React from "react";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.colorPicker}></div>
        <div className={styles.rightSection}>
          <div className={styles.sloganContainer}>
            <h1 className={styles.mainTextBlackPart}>All-in-One </h1>
            <h1 className={styles.mainTextGreenPart}>color </h1>
            <h1 className={`${styles.mainTextBlackPart} ${styles.mainTextT}`}>
              t
            </h1>
            <h1 className={`${styles.mainTextGreenPart} ${styles.mainTextOol}`}>
              ool
            </h1>
          </div>
          <h1 className={styles.description}>
            Organize, explore & choose your colors
          </h1>

          <Link href="/signup">
            <a className={styles.signUp}>Become a chameleon</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
