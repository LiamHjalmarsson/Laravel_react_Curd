import { useRouteError } from 'react-router-dom';

import MainNavigation from '../../components/Main/Navigation';
import PageContent from "../../components/Content/PageContent";

import { Fragment } from 'react';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    return (
        <Fragment>
            <MainNavigation />
            <PageContent title={title}>
                <p>
                    {message}
                </p>
            </PageContent>
        </Fragment>
    );
}

export default ErrorPage;