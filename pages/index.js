import Head from "next/head";
import EventList from "./../components/../components/events/EventList";
import styles from "./Index.module.css";
import fs from "fs/promises";
import path from "path"

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
      <h1 className={styles.main_title}>Welcome to DevOps Playground Events Page</h1>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dpg-meetups-file.json")
 const jsonEvents = await fs.readFile(filePath);
 const allEvents = JSON.parse(jsonEvents);

 const featuredEvents = allEvents.meetups.filter((event) => event.featured);


 console.log(featuredEvents)



  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
