import Head from "next/head";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FiChevronsLeft } from "react-icons/fi";
import styles from "./Layout.module.css";
import Divider from "./divider";
import Footer from "./footer";

Layout.defaultProps = {
  title: "Jake Funke",
};
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
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Head>
            <title>{home ? "Jake Funke" : `Jake Funke -  ${title}`}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.title}>{title}</h1>
          <Divider />
          {children}
          {home ? (
            <>
              <Footer
                icon={<BsQuestionCircleFill />}
                text="About"
                url={"/about"}
              ></Footer>
            </>
          ) : (
            <>
              <Footer
                icon={<FiChevronsLeft />}
                text="back to home"
                url={"/"}
              ></Footer>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
