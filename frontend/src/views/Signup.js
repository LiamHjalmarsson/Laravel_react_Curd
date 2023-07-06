import { useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
// import fetchClient from "../client";

const Signup = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setToken, setUser} = useStateContext();


    const onSubmit = async (ev) => {
        ev.preventDefault()
    
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }


        // let response = await fetch("http://127.0.0.1:8000/api/signup");

        // let response = await fetch("http://127.0.0.1:8000/api/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(payload)
        // });

        // console.log(response);

        // let res = await response.json();

        // console.log(res);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1 className="title"> 
                Signup free today
            </h1>
            <input ref={nameRef} placeholder="Fullname" type="text" />
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <input ref={passwordConfirmationRef} placeholder="Password Confirmation" type="password" />
            <button className="btn btn-block"> Signup </button>
            <p className="message">
                Already Registered <Link to="/login"> Login </Link>
            </p>
        </form>
    );
};

export default Signup;