import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Index.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Colorool</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
    </>
  );
}

export default Home;
