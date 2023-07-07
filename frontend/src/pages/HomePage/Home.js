import PageContent from "../../components/Content/PageContent";
import Banner from "../../components/UI/Banner/Banner";

import styles from "./Home.module.css";

function HomePage() {
    return (
        <PageContent title="Welcome!">
            <p>Browse all our amazing events!</p>
            <div className={styles.div}>
                <Banner />
            </div>
        </PageContent>
    );
}

export default HomePage;
