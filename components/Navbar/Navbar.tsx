import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/colorpalettes">
        <a>Color Palettes</a>
      </Link>
      <Link href="/help">
        <a>Help Center</a>
      </Link>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </>
  );
};

export default Navbar;
