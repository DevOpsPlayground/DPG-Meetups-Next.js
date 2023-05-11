import { useEffect, useState } from "react";
import { getEventById } from "/helpers/api";
import { useRouter } from "next/router";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import styles from "./IndividualEvent.module.css";
import Image from "next/image";

export default function IndividualEventPage() {
  const router = useRouter();
  const { eventid } = router.query;
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventById(eventid).then((data) => {
      setEvent(data);
    });
  }, [eventid]);

  if (isNaN(eventid)) {
    return (
      <>
        <div className="loading_container">
          <p className="loading_text">Invalid event url...</p>
        </div>
      </>
    );
  }

  if (!event) {
    return (
      <div className="loading_container">
        <div className="lds-ring">
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading_text">Getting your event...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event.title}</h1>
      <div className={styles.info_cards_container}>
        <div className={styles.info_card}>
          <MdAccessTimeFilled />
          <p className={styles.info_text}>{event.date}</p>
        </div>
        <div className={styles.info_card}>
          <IoLocation />
          <p className={styles.info_text}>{event.location}</p>
        </div>
      </div>

      <Image
        src="/assets/audience.jpg"
        alt="crowd sat with laptops in office"
        className={styles.image}
        height={830}
        width={630}
      ></Image>
      <p className={styles.description}>{event.description}</p>
    </div>
  );
}
