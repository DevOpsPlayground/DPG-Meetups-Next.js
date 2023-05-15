import { useEffect, useState } from "react";
import { getFilteredEvents } from "../../helpers/api";
import { useRouter } from "next/router";
import EventCard from "../../components/events/EventCard";
import Link from "next/link";
import { MdEventBusy } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import styles from "./EventsSearchResult.module.css";

export default function EventSearchPage(props) {
  if (!props.filteredEvents) {
    return (
      <div className={styles.no_events_container}>
        <MdEventBusy size={200} className={styles.no_events_icon} />
        <p className={styles.no_events_text}>No events found</p>
      </div>
    );
  }

  const { filteredEvents } = props;

  return (
    <>
      <div className={styles.event_search_page}>
        {filteredEvents.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
      </div>
      <Link href={`/events`} className={styles.back_button}>
        <TbArrowBackUp size={50} color='white' />
      </Link>
    </>
  );
}

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
