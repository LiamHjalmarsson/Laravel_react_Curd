import { Fragment } from "react";

import styles from "./EventItem.module.css";

const EventItem = ({event}) => {

    console.log("props", event);
    return (
        <Fragment>
            <div className={styles.div}>
                <h1>
                    {event.data.name}
                </h1>
                <div>
                    <p> 
                        {event.data.description}
                    </p>
                </div>
                <div>
                    <h4>
                        {event.data.city}
                    </h4>
                    <div>
                        <p> 
                            {event.data.start_time}
                        </p>
                        <p> 
                            {event.data.end_time}
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>        
    );
}

export default EventItem;