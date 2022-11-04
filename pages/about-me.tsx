import Link from "next/link";
import Divider from "../components/divider";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";

export default function AboutMe({}) {
  return (
    <Layout title={"About Me"}>
      <h1 className={styles.title}>About Me</h1>
      <Divider></Divider>
      dangerosly cheesy<br></br>
    </Layout>
  );
}
