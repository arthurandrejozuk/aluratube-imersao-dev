
import styles from './Cabecalho.module.scss';
import config from "../../../config.json";

function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__banner}>
                 <h3>Bem-vindo ao Alura-tube</h3>
            </div>
            <div className={styles.cabecalho__perfil}>
                <img className={styles.cabecalho__perfil__img} src={`https://github.com/${config.github}.png`} alt="Foto de perfil" />
                <div className={styles.cabecalho__perfil__desc}>
                    <h1>{config.name}</h1>
                    <p>{config.job}</p>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho;