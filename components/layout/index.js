import Head from "next/head";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Amirhossein Beigi | Front-end Developer" />
        <meta name="og:title" content="Amirhossein Beigi | Front-end Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>AmirhBeigi</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
