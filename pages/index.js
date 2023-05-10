import Head from 'next/head';
import EventList from "./events";
import { getAllEvents } from '/helpers/api';


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
      <EventList events={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}
