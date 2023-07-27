import styles from './Timeline.module.scss';

function Timeline(props) {

    console.log("Dentro do componente", props.playlist)
    const playlistName = Object.keys(props.playlist);
    
    return(
        <div  className={styles.timeline__container}>
            {playlistName.map((item) =>{
                const videos = props.playlist[item];
                return(
                    <section className={styles.timeline}>
                        <h2>{item}</h2>
                        <div className={styles.timeline__videos}>
                            {videos.map(video => {
                                return(
                                    <a className={styles.timeline__videos__vid} href={video.url}>
                                        <img src={video.thumb} alt="" />
                                        <span>{video.title}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export default Timeline;