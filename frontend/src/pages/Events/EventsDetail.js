import { Fragment, Suspense } from "react";
import { Await, defer, redirect, useRouteLoaderData } from "react-router-dom"
import Loading from "../../components/UI/Loading/Loading";
import EventItem from "../../components/Events/EventItem";

const EventDetailPage = () => {
    const { event } = useRouteLoaderData("event-detail");

    return (
        <Fragment>
            <Suspense
                fallback={
                    <Loading>
                        <p> Content is Loading... </p>
                    </Loading>
                }
            >

                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            
            </Suspense>
        </Fragment>
    );
}

export default EventDetailPage;

const loadEvent = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/events/${id}`);

    if (!response.ok) {
        console.log("error");
    } else {
        let recourse = await response.json();
        return recourse;
    }
}

const loadEvents = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/events`);

    if (!response.ok) {
        console.log("error");
    } else {
        let recourse = await response.json();
        return recourse;
    }
}

export const loader = async ({request, params}) => {
    let id = params.eventId;

    return defer(
        {
            event: await loadEvent(id),
            events: loadEvents()
        }
    );
}

export const action = async ({request, params}) => {
    let eventId = params.eventId;
    let response = await fetch(`http://127.0.0.1:8000/api/events/${eventId}`, {
        method: request.method,
        headers: {'Content-Type': 'application/json', "Authorization": `Bearer {}`},
    });

    if (!response.ok) {
        console.log("error");
    } else {
        return redirect("/events");
    }
}