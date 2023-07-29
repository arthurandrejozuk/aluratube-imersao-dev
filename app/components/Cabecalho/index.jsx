
import styles from './Cabecalho.module.scss';
import config from "../../../config.json";
import styled from 'styled-components';

const Backgroundheader = styled.header`

    background-color: ${({ theme }) => theme.backgroundBase};
    border-bottom: 1px solid ${({ theme }) => theme.backgroundBase};
    padding-top:36px;
    h1{
        color: ${({ theme }) => theme.textColorBase}
    }
`

function Cabecalho() {
    return(
        <Backgroundheader className={styles.cabecalho}>
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
        </Backgroundheader>
    )
}

export default Cabecalho;