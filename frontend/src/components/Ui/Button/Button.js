import { Fragment } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return <button className={styles.button}> {props.label} </button>
}

export default Button;