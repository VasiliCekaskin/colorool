import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import React from "react";

const itemStateStyle = (linkPath: string): string => {
  const [pathName, setPathName] = React.useState("");
  React.useEffect(() => {
    setPathName(window.location.pathname);
  });

  if (pathName === linkPath) {
    return styles.active;
  }

  return styles.inactive;
};

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="logo.png" className={styles.logo} alt="colorool logo" />
        <div className={styles.navbar}>
          <Link href="/">
            <a className={`${styles.navbarItem} ${itemStateStyle("/")}`}>
              Home
            </a>
          </Link>
          <Link href="/colorpalettes">
            <a
              className={`${styles.navbarItem} ${itemStateStyle(
                "/colorpalettes"
              )}`}
            >
              Color Palettes
            </a>
          </Link>
          <Link href="/help">
            <a className={`${styles.navbarItem} ${itemStateStyle("/help")}`}>
              Help Center
            </a>
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
