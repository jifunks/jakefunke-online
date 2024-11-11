/* eslint-disable react/no-unescaped-entities */
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { FaGithub, FaLinkedin, FaSoundcloud, FaEnvelope } from "react-icons/fa";
import Avatar from "../components/avatar";
import ContactLink from "../components/contact-link";
import Divider from "../components/divider";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Avatar></Avatar>
      <h2 className={styles.location}>
        <MdLocationPin className={styles["location-pin"]} />
        Santa Barbara, CA
      </h2>
      <div className={styles.content}>
        <p>
          Hello! I'm Jake, and I love building web applications. I'm currently a
          Senior Software Engineer at <a href="https://www.wellthapp.com">Wellth</a>.
        </p>
        <p>
          I also made <a href="https://github.com/jifunks/botany">botany</a> - a
          real time plant simulator, and{" "}
          <a href="https://soundworldsguestbook.com/">soundworld's guestbook</a>{" "}
          - an old school multimedia guestbook for anonymous content sharing.
        </p>
        <p>
          I sometimes do graphic design. Check out some of my work{" "}
          <Link href="/work">here</Link>.
        </p>
      </div>
      <Divider />
      <ul className={styles.nav}>
        <ContactLink
          icon={<HiOutlineDocumentText />}
          text="resume"
          url="/JacobFunke-Resume-2024.pdf"
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
