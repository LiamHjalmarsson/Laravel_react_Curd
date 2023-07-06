import styles from "./Header.module.css";
import Header_Nav from "./Header_Nav";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1> CURD FOR YOUR DAY </h1>
                <Header_Nav></Header_Nav>
            </header>
        </>
    )
}

export default Header;