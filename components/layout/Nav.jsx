import Link from "next/link";
import styles from "./Nav.module.css";
import Image from "next/image";
import { MdEventNote } from "react-icons/md";

function Nav() {
  return (
    <div className={styles.nav_bar}>
      <Link href="/">
        <Image
          src="/assets/logowhitetransparent.png"
          alt={"panda with glasses logo"}
          className={styles.panda_logo}
          width={250}
          height={100}
        ></Image>
      </Link>
      <Link className={styles.all_events_container} href="/events">
        <MdEventNote size={60} />
        <p className={styles.all_events_text}>All Events</p>
      </Link>
    </div>
  );
}

export default Nav;
