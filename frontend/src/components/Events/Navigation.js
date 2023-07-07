import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const EventsNavigation = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <NavLink to="/events" end>
                            All Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events/new" end>
                            New Event
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;