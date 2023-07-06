import { useContext } from "react";
import EventContext from "../../../state/event-context"; 

import styles from "./EventItem.module.css";
import Card from "../../Ui/Card/Card";

const EventItem = (props) => {
    // const eventContext = useContext(EventContext);

    // const addEvent = () => {

    // }

    console.log(props);
    return (
        <li className={styles.eventList}>
            <Card>
                <h3> {props.name} </h3>
                <div>
                    {props.description}
                </div>
            </Card>
        </li>
    );
}

export default EventItem;