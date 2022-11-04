import Link from "next/link";
import { ReactElement } from "react";
import { IconContext } from "react-icons/lib";
import styles from "./ContactLink.module.css";

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
    <li>
      <Link href={url} target="_blank">
        <IconContext.Provider value={{ style: { verticalAlign: "bottom" } }}>
          {icon}
        </IconContext.Provider>
        <span className={styles.linkText}>{text}</span>
      </Link>
    </li>
  );
}
