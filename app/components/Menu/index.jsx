import Logo from "../Logo";
import styles from './Menu.module.scss'
function Menu () {
    return(
        <div className={styles.menu}>
            <Logo className={styles.menu__logo}/>
            <div className={styles.menu__pesquisa}>
                <input placeholder="Procure aqui" type="text" name="" id="" />
            </div>
            <p>LOL</p>
        </div>
    )
}

export default Menu;