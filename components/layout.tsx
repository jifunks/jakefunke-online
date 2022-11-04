import Head from "next/head";
import { GiCheeseWedge } from "react-icons/gi";
import { FiChevronsLeft } from "react-icons/fi";
import styles from "../styles/Home.module.css";
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
    <div>
      <Head>
        <title>{home ? "Jake Funke" : `Jake Funke -  ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>{title}</h1>
        <Divider />
        {children}
      </main>
      {home ? (
        <>
          <Footer
            icon={<GiCheeseWedge />}
            text="Secret Cheese"
            url={"/about-me"}
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
  );
}
