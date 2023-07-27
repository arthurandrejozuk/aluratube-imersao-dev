import { useState } from "react";
import Logo from "../Logo";
import styles from './Menu.module.scss'

function Menu ({valorDaPesquisa, setValorDaPesquisa}) {

    const ValorDaBusca = valorDaPesquisa;
    const setValorDaBusca = setValorDaPesquisa

    return(
        <div className={styles.menu}>
            <Logo className={styles.menu__logo}/>
            <div className={styles.menu__pesquisa}>
                <input placeholder="Procure aqui" type="text" onChange={(event) => {
                   setValorDaBusca(event.target.value);
                }} value={ValorDaBusca} />
                <button className={styles.menu__pesquisa__button}>🔎</button>
            </div>
            
        </div>
    )
}

export default Menu;