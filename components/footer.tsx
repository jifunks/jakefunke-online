import Link from "next/link";
import { ReactElement } from "react";
import Divider from "./divider";
import styles from "./Footer.module.css";
import { IconContext } from "react-icons/lib";
export default function Footer({
  icon,
  url,
  text,
}: {
  icon: ReactElement;
  url: string;
  text: string;
}) {
  return (
    <>
      <Divider />
      <div className={styles.backToHome}>
        <Link href={url}>
          <IconContext.Provider
            value={{ style: { verticalAlign: "bottom", marginRight: "0.3em" } }}
          >
            {icon}
          </IconContext.Provider>
          {text}
        </Link>
        <footer className={styles.footer}>jf 2022</footer>
      </div>
    </>
  );
}
