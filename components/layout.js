import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";

const name = "Amirhossein Beigi";
export const siteTitle = "Amirhossein Beigi | Front-end Developer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Amirhossein Beigi | Front-end Developer" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
    </div>
  );
}
