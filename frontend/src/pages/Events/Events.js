import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom"
import EventList from "../../components/Events/EventsList";
import Loading from "../../components/UI/Loading/Loading";

const EventsPage = () => {
    const { events } = useLoaderData();

    return (
        <Suspense 
            fallback={<Loading>
                <p> Content is Loading... </p>
            </Loading>} 
        >
            <Await resolve={events}>
                {(loadedEvents) => <EventList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

const loadEvents = async () => {
    
    const response = await fetch("http://127.0.0.1:8000/api/events");

    console.log(response);

    if (!response.ok) {
        console.log("error", response);
    } else {
        const recourse = await response.json();

        console.log(recourse);

        return recourse;
    }

}

export const loader = () => {
    return defer(
        {
            events: loadEvents(),
        }
    );
}