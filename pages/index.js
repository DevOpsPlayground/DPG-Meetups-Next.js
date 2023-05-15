import Head from "next/head";
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/../components/events/EventList";
import styles from "./Index.module.css";

export default function Homepage({events}) {
  if (!events.length) {
    return (
      <div className="loading_container">
        <div className="lds-ring">
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading_text">Getting your events...</p>
      </div>
    );
  }
  return (
    <div className="Homepage">
      <Head>
        <meta
          name="description"
          content="Find a lot of great events that allow you to learn..."
        />
      </Head>
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <div className={styles.feature_title_container}>
        <h2 className={styles.feature_title}>Featured Events</h2>
      </div>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}
