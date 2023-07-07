import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <NavLink to="/" className={styles.a} end >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={styles.a} end>
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;