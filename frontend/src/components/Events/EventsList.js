import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

const EventList = ({events}) => {

    return (
        <div className={classes.events}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {events.data.map((event) => (
                    <li key={event.id} className={classes.item}>
                        <Link to={`/events/${event.id}`}>
                            <div className={classes.content}>
                                <h2>{event.name}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EventList;