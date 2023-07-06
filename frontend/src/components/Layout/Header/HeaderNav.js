import { useState } from "react";
import Button from "../../Ui/Button/Button";
import styles from "./Header_Nav.module.css";

const HeaderNav = (props) => {
    const [btnHighlight, setBtnHighlight] = useState(false);


    return (
        <div className={styles.navContainer}>
            <div>
                <Button onClick={props.onRegister} label="Register"/>
                <Button onClick={props.onLogin} label="Login"/>
            </div>
        </div>
    );
}

export default HeaderNav;