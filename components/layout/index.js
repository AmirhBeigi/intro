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
        {/* <style>.async-hide { opacity: 0 !important} </style> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'OPT-M3VDX5W':true});`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJPKMTT');`,
          }}
        ></script>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-M3VDX5W"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-202259902-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-202259902-1');`,
          }}
        ></script>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJPKMTT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      {children}
    </div>
  );
};

export default Layout;
