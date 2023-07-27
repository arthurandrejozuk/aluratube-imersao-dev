import Cabecalho from "../app/components/Cabecalho";
import Timeline from "../app/components/Timeline";
import Menu from "../app/components/Menu"
import config from '../config.json';
import { useState } from "react";

function HomePage() {

    const [pesquisa, setPesquisa] = useState('')

    return(
        <div>
            <Menu valorDaPesquisa={pesquisa} setValorDaPesquisa={setPesquisa}/>
            <Cabecalho/>
            <Timeline searchValue={pesquisa} playlist={config.playlist}/>
        </div>
    )
}

export default HomePage;