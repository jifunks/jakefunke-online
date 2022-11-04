/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Divider from "../components/divider";
import styles from "../styles/home.module.css";
import { MdLocationPin } from "react-icons/md";
import Avatar from "../components/avatar";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <h1 className={styles.title}>Jake Funke</h1>
      <Divider />
      <Avatar></Avatar>
      <h2 className={styles.location}>
        <MdLocationPin className="react-icons" />
        Santa Barbara, CA
      </h2>
      <div className={styles.bio}>
        <p>
          Hello! I'm Jake, and I love building web applications. I'm currently a
          Senior Backend Engineer at <a href="https://artera.io">Artera</a>.
        </p>
        <p>
          Check out my <a href="http://github.com/jifunks">GitHub</a> for some
          of my projects. I'm most proud of{" "}
          <a href="https://github.com/jifunks/botany">botany</a> - a real time
          plant simulator, and{" "}
          <a href="https://github.com/jifunks/taskrpg">taskrpg</a> - gamified
          task management.
        </p>
      </div>
      <Divider />
      <ul className="nav">
        <li>
          <a href="assets/JacobFunke-Resume-2022.pdf">
            <i className="far fa-file-alt fa-fw"></i>
            <span className="navlink">resume</span>
          </a>
        </li>
        <li>
          <a href="http://github.com/jifunks">
            <i className="fa-brands fa-github fa-fw"></i>
            <span className="navlink">github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacobfunke/">
            <i className="fa-brands fa-linkedin fa-fw"></i>
            <span className="navlink">linkedin</span>
          </a>
        </li>
        <li>
          <a href="http://soundcloud.com/eyes_low">
            <i className="fa-brands fa-soundcloud fa-fw"></i>
            <span className="navlink">soundcloud</span>
          </a>
        </li>
        <li>
          <a href="mailto:jifunks@gmail.com">
            <i className="fa-solid fa-envelope fa-fw"></i>
            <span className="navlink">jifunks@gmail.com</span>
          </a>
        </li>
      </ul>
      <Divider />
      <Link href="/about-me">chese it</Link>

      <footer className={styles.footer}>jf 2022</footer>
    </Layout>
  );
}
