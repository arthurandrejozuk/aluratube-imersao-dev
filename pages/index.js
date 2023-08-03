import Cabecalho from "../app/components/Cabecalho";
import {Timeline} from "../app/components/Timeline";
import Menu from "../app/components/Menu"
import config from '../config.json';
import { useEffect, useState } from "react";
import Footer from "../app/components/Footer";
import RegistraVideo from "../app/components/Modal";
import { videoService } from "../app/services/videoService";

function HomePage() {
    const service = videoService();
    const [pesquisa, setPesquisa] = useState('');

    const [playlist, setPlaylist] = useState({})
   
    useEffect(() => {
        service.getAllVideos()
        .then((dados) => {
            console.log(dados.data);
            const newPlaylist = { ...playlist };
            dados.data.forEach((video) => {
                if (!newPlaylist[video.playlist]) {
                    newPlaylist[video.playlist] = [];
                }
                newPlaylist[video.playlist].push(video);
            })
            console.log(newPlaylist);
            setPlaylist(newPlaylist);
        });
        
    }, []);



    return(
        <div>
            <Menu valorDaPesquisa={pesquisa} setValorDaPesquisa={setPesquisa}/>
            <Cabecalho/>
            <Timeline searchValue={pesquisa} playlist={config.playlist}/>
            <Timeline searchValue={pesquisa} playlist={playlist}/>
            <RegistraVideo/>
            <Footer/>
        </div>
    )
}

export default HomePage;