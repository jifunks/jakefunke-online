import Link from "next/link";
import Divider from "../components/divider";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";
import { GiCheeseWedge } from "react-icons/gi";

export default function AboutMe({}) {
  return (
    <Layout title={"About Me"}>
      <h1 className={styles.title}>
        About Me <GiCheeseWedge />
      </h1>
      <Divider></Divider>
      dangerosly cheesy
      <br />
    </Layout>
  );
}
