import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Divider from "./divider";

const name = "Jake Funke";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
}) {
  return (
    <div>
      <Head>
        <title>{home ? "Jake Funke" : `Jake Funke -  ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>

      {!home && (
        <>
          <Divider />
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        </>
      )}
    </div>
  );
}
