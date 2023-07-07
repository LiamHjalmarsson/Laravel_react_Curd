import styles from './PageContent.module.css';

function PageContent(props) {
    return (
        <div className={styles.content}>
            <h1>
                {props.title}
            </h1>
            {props.children}
        </div>
    );
}

export default PageContent;
