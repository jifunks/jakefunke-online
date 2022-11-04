/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { FaGithub, FaLinkedin, FaSoundcloud, FaEnvelope } from "react-icons/fa";
import Avatar from "../components/avatar";
import ContactLink from "../components/contact-link";
import Divider from "../components/divider";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Avatar></Avatar>
      <h2 className={styles.location}>
        <MdLocationPin className="react-icons" />
        Santa Barbara, CA
      </h2>
      <div className={styles.content}>
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
        <ContactLink
          icon={<HiOutlineDocumentText />}
          text="resume"
          url="../" // TODOjf: come back to figure out this
        ></ContactLink>
        <ContactLink
          icon={<FaGithub />}
          text="github"
          url="http://github.com/jifunks"
        ></ContactLink>
        <ContactLink
          icon={<FaLinkedin />}
          text="linkedin"
          url="https://www.linkedin.com/in/jacobfunke/"
        ></ContactLink>
        <ContactLink
          icon={<FaSoundcloud />}
          text="soundcloud"
          url="http://soundcloud.com/eyes_low"
        ></ContactLink>
        <ContactLink
          icon={<FaEnvelope />}
          text="jifunks@gmail.com"
          url="mailto:jifunks@gmail.com"
        ></ContactLink>
      </ul>
    </Layout>
  );
}
