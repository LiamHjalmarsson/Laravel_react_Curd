import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import ErrorPage from "./pages/ErrorPage/Error";
import HomePage from "./pages/HomePage/Home";
import EventsRootLayout from "./pages/Events/EventsRootLayout";
import EventsPage, { loader as eventsLoader } from "./pages/Events/Events";
import EventDetailPage, { loader as eventDetailLoader} from "./pages/Events/EventsDetail";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            id: "root",
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "/events",
                    element: <EventsRootLayout />,
                    children: [
                        {
                            index: true,
                            element: <EventsPage />,
                            loader: eventsLoader,
                        },
                        {
                            path: `:eventId`,
                            id: 'event-detail',
                            loader: eventDetailLoader,
                            children: [
                                {
                                    index: true,
                                    element: <EventDetailPage />
                                }
                            ]
                        }
                    ]
                },
                // {
                //     path: 'auth',
                //     element:
                // }
            ]
        }
    ]
)

function App() {
    return <RouterProvider router={router} />;
}

export default App;
