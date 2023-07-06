import { Fragment, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";

import styles from "./index.module.css";

function App() {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    const login = () => {
        setLoginShow(true);
        handleClose()
    }

    const register = () => {
        setRegisterShow(true);
        handleClose()
    }

    const handleClose = () => {
        if (loginShow) {
            setLoginShow(false);
        }

        if (registerShow){
            setRegisterShow(false);
        }
    }


    return (
        <Fragment>
            <Header onLogin={login} onRegister={register} />
            {(loginShow || registerShow) && (
                <Auth title={loginShow ? "Login" : "Register"} onClose={handleClose} />
            )}

            <main className={styles.main}>
                <Main></Main>
            </main>
        </Fragment>
    );
}

export default App;
