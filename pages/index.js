import Head from "next/head";
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/../components/events/EventList";
import styles from "./Index.module.css";
import Loader from "/components/Loader";

export default function Homepage({ featuredEvents }) {
  if (!featuredEvents.length) {
    return <Loader />;
  }

  return (
    <div className='Homepage'>
      <Head>
        <meta
          name='description'
          content='Find a lot of great events that allow you to learn...'
        />
      </Head>

      <h1 className='main_title'>Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
