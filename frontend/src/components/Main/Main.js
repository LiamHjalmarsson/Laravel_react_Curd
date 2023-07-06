import { Fragment } from "react";
import Banner from "../Ui/Banner/Banner";
import Details from "./Details";

const Main = () => {
    return (
        <Fragment>
            <Banner title="Welcome" />
            <Details />
        </Fragment>
    );
}

export default Main;