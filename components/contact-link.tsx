import Link from "next/link";
import { ReactElement } from "react";
import styles from "../styles/home.module.css";

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
        <span className={styles.linkIcon}>{icon}</span>
        <span className={styles.linkText}>{text}</span>
      </Link>
    </li>
  );
}
