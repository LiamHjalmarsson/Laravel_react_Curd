import { Fragment } from "react"
import MainNavigation from "../../components/Main/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />

            <main>
                <Outlet />
            </main>
        </Fragment>
    );
}

export default RootLayout;