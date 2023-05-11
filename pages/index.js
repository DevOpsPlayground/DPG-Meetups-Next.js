import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
import { useState, useEffect } from "react";
import styles from "./Index.module.css";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
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
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <div className={styles.feature_title_container}>
        <h2 className={styles.feature_title}>Featured Events</h2>
      </div>
      <EventList events={featuredEvents} />
    </div>
  );
}
