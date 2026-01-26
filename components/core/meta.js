import { server } from "../../lib/config";
import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, uc-fitscreen=yes"
      />
      <meta name="description" content={props.description || ""} />
      <meta name="author" content="" />
      <meta name="keywords" content="" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Android phone */}
      <meta name="theme-color" content="#4dd2b5" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* iOS phone */}
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#4dd2b5" />

      {/* Windows phone */}
      <meta name="msapplication-navbutton-color" content="#4dd2b5" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      {/* <meta name="msapplication-TileImage" content="ms-icon-144x144.png`} /> */}
      {/* <meta name="msapplication-config" content="browserconfig.xml" /> */}

      {/* Pinned Sites */}
      <meta name="application-name" content="Quranul Karim" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content={props.url || ""} />

      {/* Tap highlighting */}
      <meta name="msapplication-tap-highlight" content="no" />

      {/* UC Mobile Browser */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* Disable night mode for this page */}
      <meta name="nightmode" content="disable" />

      {/* Layout mode - content="fitscreen/standard" */}
      <meta name="layoutmode" content="fitscreen" />

      {/* imagemode - show image even in text only mode */}
      <meta name="imagemode" content="force" />

      {/* Orientation */}
      <meta name="screen-orientation" content="portrait" />

      {/* format-detection */}
      <meta name="format-detection" content="telephone=no" />

      {/* meta information for facebook */}
      <meta property="og:title" content={props.title || ""} key="ogtitle" />
      <meta property="og:url" content={props.url || ""} key="ogurl" />
      <meta property="og:image" content={props.image || ""} key="ogimage" />
      <meta property="og:type" content={props.type || "website"} key="ogtype" />
      <meta
        property="og:description"
        content={props.description || ""}
        key="ogdesc"
      />
      <meta property="og:locale" content="en" key="oglocale" />
      <meta property="og:site_name" content="QuranulKarim" key="ogsitename" />

      {/* meta information for twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:site" content="@quranulkarim" key="twsite" />
      <meta name="twitter:url" content={props.url || ""} key="twurl" />
      <meta name="twitter:title" content={props.title || ""} key="twtitle" />
      <meta
        name="twitter:description"
        content={props.description || ""}
        key="twdesc"
      />
      <meta name="twitter:image" content={props.image || ""} key="twimage" />

      {/* favicon */}
      {/* Main Link Tags */}
        <link rel="apple-touch-icon" sizes="57x57" href={`${server}/img/favicon/apple-icon-57x57.png`}/>
        <link rel="apple-touch-icon" sizes="60x60" href={`${server}/img/favicon/apple-icon-60x60.png`}/>
        <link rel="apple-touch-icon" sizes="72x72" href={`${server}/img/favicon/apple-icon-72x72.png`}/>
        <link rel="apple-touch-icon" sizes="76x76" href={`${server}/img/favicon/apple-icon-76x76.png`}/>
        <link rel="apple-touch-icon" sizes="114x114" href={`${server}/img/favicon/apple-icon-114x114.png`}/>
        <link rel="apple-touch-icon" sizes="120x120" href={`${server}/img/favicon/apple-icon-120x120.png`}/>
        <link rel="apple-touch-icon" sizes="144x144" href={`${server}/img/favicon/apple-icon-144x144.png`}/>
        <link rel="apple-touch-icon" sizes="152x152" href={`${server}/img/favicon/apple-icon-152x152.png`}/>
        <link rel="apple-touch-icon" sizes="180x180" href={`${server}/img/favicon/apple-icon-180x180.png`}/>
        <link rel="icon" type="image/png" sizes="192x192"  href={`${server}/img/favicon/android-icon-192x192.png`}/>
        <link rel="icon" type="image/png" sizes="32x32" href={`${server}/img/favicon/favicon-32x32.png`}/>
        <link rel="icon" type="image/png" sizes="96x96" href={`${server}/img/favicon/favicon-96x96.png`}/>
        <link rel="icon" type="image/png" sizes="16x16" href={`${server}/img/favicon/favicon-16x16.png`}/>

        {/* Others */}
        <link href={`${server}/img/favicon/favicon.ico`} rel="shortcut icon" type="image/x-icon" />

      {/* page title */}
      <title>
        {props.title != "" ? props.title + " | " : ""} {"কুরআনুল কারীম | বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর | QuranulKarim.com"}
      </title>

      {/* Manifest.json */}
      {/*<link rel='manifest' href='/manifest.json' />*/}
    </Head>
  );
}
