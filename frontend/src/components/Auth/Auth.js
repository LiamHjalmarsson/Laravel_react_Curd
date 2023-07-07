import { Fragment, createRef, useState  } from "react";
import Input from "../Ui/Input/Input";
import useHttp from "../../hooks/use-http";
import Button from "../Ui/Button/Button";

import styles from "./Auth.module.css";

const Auth = (props) => {

    let httpRecourse = useHttp(); // Using custom hook

    let { isLoading, error, sendRequest: login } = httpRecourse;

    const emailRef = createRef();
    const passwordRef = createRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        login(
            {
                url: "http://127.0.0.1:8000/api/login",
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: { 
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }
            }
        );
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
                        ref={emailRef}
                        input={
                            { 
                                id: "email-input",
                                placeholder: "Enter Email",
                            }
                        }
                    />
                    <Input 
                        label="Password"
                        ref={passwordRef}
                        input={
                            { 
                                id: "password-input",
                                placeholder: "Enter Password",
                            }
                        }
                    />

                    <div className={styles.buttonBox}>
                        <Button label="Close" onClick={props.onClose}/>
                        {props.title === "Login" ? (
                            <Button label="Login" type="submit"/>
                        ) : (
                            <Button label="Register" />
                        )}
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Auth;