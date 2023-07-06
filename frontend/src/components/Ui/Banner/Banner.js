import Card from "../Card/Card";
import Image from "../Image/Image";
import styles from "./Banner.module.css"
import BannerImg from "../../../assets/Banner.png";
import Button from "../Button/Button";
import { useState } from "react";

const Banner = (props) => {
    const [showBanner, setShowBanner] = useState(true);

    const closeHandler = () => {
        setShowBanner(false);
    }

    return ( 
        <div className={styles.bannerContainer}>
            { showBanner && (
                <Card extraClass="customCard">
                    <div className={styles.header}>
                        <h1 className={styles.title}> {props.title} </h1>
                        <Button customClass={styles.buttonCustom} label="Close" onClick={closeHandler} />
                    </div>
                    <div className={styles.bannerImage}>
                        <Image src={BannerImg} alt="Banner for CURD" />
                    </div>
                </Card>
            )}
        </div>
    );
}

export default Banner;