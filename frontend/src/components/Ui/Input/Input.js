import styles from "./Input.module.css";

const Input = (props, ref) => {
    return (
        <div>
            <label htmlFor={props.input.id}> 
                {props.label} 
            </label>

            <input {...props.input}/>
        </div>
    )
}

export default Input;