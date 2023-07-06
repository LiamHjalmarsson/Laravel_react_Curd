import { Fragment  } from "react";
import styles from "./Auth.module.css";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";

const Auth = (props) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <Fragment>
            <div className={styles.auth}>
                <h2> 
                    {props.title}
                </h2>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <Input 
                        label="Email"
                        input={
                            { 
                                placeholder: "Enter Email",
                            }
                        }
                    />
                    <Input 
                        label="Password"
                        input={
                            { 
                                placeholder: "Enter Email",
                            }
                        }
                    />

                    <div className={styles.buttonBox}>
                        <Button label="Close" onClick={props.onClose}/>
                        <Button label="Login" />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Auth;