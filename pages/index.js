import EventList from "./../components/../components/events/EventList";
import styles from "./Index.module.css";
import fs from "fs/promises";
import path from "path";

export default function Homepage({ events }) {
  if (!events.length) {
    return <Loader />;
  }
  return (
    <div className='Homepage'>
      <h1 className={styles.main_title}>
        Welcome to DevOps Playground Events Page
      </h1>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dpg-meetups-file.json");
  const jsonEvents = await fs.readFile(filePath);
  const allEvents = JSON.parse(jsonEvents);

  const featuredEvents = allEvents.meetups.filter((event) => event.featured);

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
