import Head from 'next/head';
import EventList from "./../components/events/EventList";
import { getFeaturedEvents } from '/helpers/api';


export default function Homepage(props) {
  return (
    <div className='Homepage'>
      <Head>
        <title>Devops Playground Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to learn...'
        />
      </Head>
      <h1>WELCOME TO DEVOPS PLAYGROUND EVENTS PAGE</h1>
      <h2>Featured Events</h2>
      <EventList events={props.events} />
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
