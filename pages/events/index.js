import { useRouter } from "next/router";
import EventList from "/components/events/EventList";
import EventsSearch from "@/components/events/EventSearch";
import { MongoClient } from "mongodb";
import styles from "./../Index.module.css";

function AllEventsPage({ events }) {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  if (!events.length) {
    return <Loader />;
  }

  return (
    <>
      <h1 className={styles.main_title}>All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.21rhrh2.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      events: events.map((event) => ({
        date: event.date,
        description: event.description,
        featured: event.featured,
        location: event.location,
        presenters: event.presenters,
        title: event.title,
        id: event._id.toString(),
      })),
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
