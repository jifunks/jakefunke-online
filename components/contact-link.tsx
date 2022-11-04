import Link from "next/link";
import { ReactElement } from "react";
import { IconContext } from "react-icons/lib";
import styles from "./ContactLinks.module.css";

export default function ContactLink({
  icon,
  url,
  text,
}: {
  icon: ReactElement;
  url: string;
  text: string;
}) {
  return (
    <li className={styles["contact-link"]}>
      <Link href={url} target="_blank">
        <IconContext.Provider value={{ style: { verticalAlign: "bottom" } }}>
          {icon}
        </IconContext.Provider>
        <span className={styles["link-text"]}>{text}</span>
      </Link>
    </li>
  );
}
