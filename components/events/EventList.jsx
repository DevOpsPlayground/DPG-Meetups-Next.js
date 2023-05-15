import EventCard from "./EventCard";
import styles from "./EventList.module.css";
export default function EventList({ events }) {
  return (
    <div className={styles.event_list}>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </div>
  );
}
