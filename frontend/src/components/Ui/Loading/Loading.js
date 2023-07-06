import styles from "./Loading.module.css";

const Loading = (props) => {
    return (
        <section className={`${styles.section} ${props.customClass}`} >
            {props.children}
        </section>
    )
}

export default Loading;