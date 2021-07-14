import Head from "next/head";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Amirhossein Beigi | Front-end Developer" />
        <meta name="og:title" content="Amirhossein Beigi | Front-end Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>AmirhBeigi</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5KBPJRYWZ9');`,
          }}
        ></script>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-TN6F3K8"></script>
        <script asyn src="https://www.googletagmanager.com/gtag/js?id=G-5KBPJRYWZ9"></script>
      </Head>

      {children}
    </div>
  );
};

export default Layout;
