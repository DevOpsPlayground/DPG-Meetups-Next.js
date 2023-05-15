import { getEventById, getAllEvents } from "/helpers/api";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import styles from "./IndividualEvent.module.css";
import Image from "next/image";

export default function IndividualEventPage({event}) {
  if (isNaN(event.id)) {
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

export async function getStaticProps(context) {
  const eventId = context.params.eventid;

  const event = await getEventById(eventId);

  return {
    props: {
      event: event || null,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventid: `${event.id}` } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
