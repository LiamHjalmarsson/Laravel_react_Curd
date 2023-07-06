import { Link } from "react-router-dom";

const Login = () => {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
                    <h1 className="title"> 
                        Login on to your account 
                    </h1>
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password"  />
                    <button className="btn btn-block"> Login </button>
                    <p className="message">
                        Not Registered <Link to="/signup"> Create an account</Link>
                    </p>
        </form>
    );
}

export default Login;