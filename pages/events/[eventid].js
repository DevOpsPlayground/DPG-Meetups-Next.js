import { getEventById, getAllEvents } from "/helpers/api";

export default function IndividualEventPage(props) {
  if (!props.event || isNaN(props.event.id)) {
    return (
      <>
        <p>Invalid URL</p>
      </>
    );
  }

  if (!props.event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{props.event.title}</h1>
      <h2>{props.event.date}</h2>
      <h3>{props.event.location}</h3>
      <p>{props.event.description}</p>
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
