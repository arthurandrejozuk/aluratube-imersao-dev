import Cabecalho from "../app/components/Cabecalho";
import Timeline from "../app/components/Timeline";
import Menu from "../app/components/Menu"
import config from '../config.json';

function HomePage() {

    return(
        <div>
            <Menu/>
            <Cabecalho/>
            <Timeline playlist={config.playlist}/>
        </div>
    )
}

export default HomePage;