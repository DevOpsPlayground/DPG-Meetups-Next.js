import { useEffect, useState } from "react";
import { getFilteredEvents } from "../../helpers/api";
import { useRouter } from "next/router";
import EventCard from "../../components/events/EventCard";
import Link from 'next/link';
import { MdEventBusy } from 'react-icons/md';
import { TbArrowBackUp } from 'react-icons/tb';
import styles from "./EventsSearchResult.module.css"

export default function EventSearchPage(props) {
  /* ---- PART 1 OF 2 -> START OF SERVER SIDE FETCHING CODE ---- */

  const { filteredEvents } = props;

  /* ---- PART 1 OF 2 -> END OF SERVER SIDE FETCHING CODE ---- */


  /* ---- PART 1 OF 1 -> START OF CLIENT SIDE FETCHING CODE ---- */
  
  // const [filteredEvents, setFilteredEvents] = useState([]);
  // const [noEvents, setNoEvents] = useState(false);
  // const router = useRouter();

  // const url = router.asPath;

  // const segments = url.split("/");
  // const year = segments[segments.length - 1];
  // const month = segments[segments.length - 2];

  // useEffect(() => {
  //   getFilteredEvents(year, month).then((data) => {
  //     !data.length ? setFilteredEvents(null) : setFilteredEvents(data);
  //   });
  // }, []);

  // if (
  //   isNaN(year) ||
  //   year > 2030 ||
  //   year < 2020
  // ) {
  //   return (
  //     <>
  //       <p>Invalid filter. Please adjust your values!</p>
  //     </>
  //   );
  // }

  /* ---- PART 1 OF 1 -> END OF CLIENT SIDE FETCHING CODE ---- */

  return (
    <>
      <div className={styles.event_search_page}>
        {noEvents && (
          <div className={styles.no_events_container}>
            <MdEventBusy size={200} className={styles.no_events_icon} />
            <p className={styles.no_events_text}>No events found</p>
          </div>
        )}
        {filteredEvents.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
      </div>
      <Link href={`/events`} className={styles.back_button}>
        <TbArrowBackUp size={50} color="white" />
      </Link>
    </>
  );
}

  /* ---- PART 2 OF 2 -> START OF SERVER SIDE FETCHING CODE  ---- */

export async function getServerSideProps(context) {

  const { params } = context;
  const filterData = params.slug;

  const filteredMonth = filterData[0];
  const filteredYear = filterData[1];

  if (isNaN(filteredYear) || filteredYear > 2023 || filteredYear < 2019) {
    return {
      props: { hasError: true },
      notFound: true,
      redirect: {
        destination: "/error",
      },
    };
  }

  const filteredEvents = await getFilteredEvents(filteredYear, filteredMonth);

  return {
    props: {
      filteredEvents: filteredEvents.length ? filteredEvents : null,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}

  /* ---- PART 2 OF 2 -> END OF SERVER SIDE FETCHING CODE  ---- */
