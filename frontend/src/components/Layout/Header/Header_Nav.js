import Button from "../../Ui/Button/Button";
import styles from "./Header_Nav.module.css";

const Header_Nav = (props) => {
    return (
        <div className={styles.navContainer}>
            <div>
                <Button label="Register"/>
                <Button label="Login"/>
            </div>
        </div>
    );
}

export default Header_Nav;