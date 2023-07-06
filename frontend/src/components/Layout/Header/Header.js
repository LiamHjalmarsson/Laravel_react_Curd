import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const Header = (props) => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1> CURD FOR YOUR DAY </h1>
                <HeaderNav onLogin={props.onLogin} onRegister={props.onRegister}/>
            </header>
        </Fragment>
    )
}

export default Header;