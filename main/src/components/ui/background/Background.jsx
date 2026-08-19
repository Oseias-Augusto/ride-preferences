import carro from "../../../assets/carro.png";
import styles from "./Background.module.css";


export default function Background() {

    return (
        <>
            <div className={styles.fundo} >
                <div className={styles.contImage}>
                    <img className={styles.image} src={carro} alt="Fiat Mobi" />
                </div>
            </div>
        </>
    )

}