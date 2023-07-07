import {useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";
import Loading from "../Ui/Loading/Loading";
import EventItem from "./EventItem/EventItem";
import styles from "./Details.module.css";

const Details = () => {
    let [events, setEvents] = useState([]); // Using state hook

    let httpRecourse = useHttp(); // Using custom hook

    let { isLoading, error, sendRequest: fetchEvents } = httpRecourse;

    useEffect(() => {
        let transform = (object) => {
            let loadedObjects = [];

            for (let key in object.data) {

                loadedObjects.push(
                    {
                        id: key,
                        key: key,
                        name: object.data[key].name,
                        description: object.data[key].description
                    }
                );

            }

            setEvents(loadedObjects);
        }

        fetchEvents(
            { url: 'http://127.0.0.1:8000/api/events' },
            transform
        );
        
    }, [fetchEvents]);

    if (isLoading) {
        return (
            <Loading customClass={styles.loading}> 
                <p> 
                    Content is loading 
                </p>
            </Loading>
        );
    }

    if (error) {
        console.log("error", error);
        return (
            <Loading customClass={styles.error}>
                <p> 
                    {error} 
                </p>
            </Loading>
        );
    }

    let eventList = events.map((event) =>
        <EventItem 
            id={event.id}
            key={event.key}
            name={event.name}
            description={event.description}
        />
    );

    return (
        <section className={styles.section}>
            <ul className={styles.ulContainer}>
                {eventList}
            </ul>
        </section>
    );
}

export default Details;