import { Fragment } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button type={props.type ? props.type : undefined} className={`${styles.button} ${props.customClass}`} onClick={props.onClick}> 
            {props.label} 
        </button>
    );
}

export default Button;