import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} alt="colorool logo" />
        <div className={styles.navbar}>
          <Link href="/">
            <a className={styles.navbarItem}>Home</a>
          </Link>
          <Link href="/colorpalettes">
            <a className={styles.navbarItem}>Color Palettes</a>
          </Link>
          <Link href="/help">
            <a className={styles.navbarItem}>Help Center</a>
          </Link>
          <Link href="/signin">
            <a className={styles.signIn}>Sign In</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
