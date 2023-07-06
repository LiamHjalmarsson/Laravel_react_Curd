import React from "react";

const EventContext = React.createContext(
    {
        name: "",
        description: "",
    }
);

export default EventContext;