import Head from "next/head";
import Image from "next/image";
import classes from "./layout.module.css";
import Link from "next/link";

const name = "My project";
export const siteTitle = "Next.js Template Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is my website using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={classes.header}>
      
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={classes.borderCircle}
              height={80}
              width={80}
              alt={name}
            />
            <h1 className={classes.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={classes.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={classes.headingLg}>
              <Link href="/">
                <a className={classes.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>Hilfe</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
